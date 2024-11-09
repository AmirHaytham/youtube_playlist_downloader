const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const ProgressBar = require('progress');

// Configure the output directory for downloads
const outputDir = './EhabEnglish/playlists';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Paths to yt-dlp and ffmpeg executables
const ytDlpPath = 'C:\\yt-dlp\\yt-dlp.exe'; // Update to the actual path where yt-dlp.exe is located
const ffmpegPath = 'C:\\ffmpeg\\bin\\ffmpeg.exe'; // Update to the actual path where ffmpeg.exe is located

// Check if ffmpeg is accessible
console.log(`Using ffmpeg located at: ${ffmpegPath}`); // Debug log for ffmpeg path

// Function to download the playlist with HD quality and progress bar
function downloadPlaylistWithProgress(playlistUrl) {
    const command = ytDlpPath;
    const args = [
        '-f', 'bestvideo[height<=1080]+bestaudio/best[height<=1080]', // Ensures HD quality and combines best video and audio
        '-o', `${path.join(outputDir, '%(title)s.%(ext)s')}`, // Output format
        '--ffmpeg-location', ffmpegPath, // Specify the location of ffmpeg
        '--merge-output-format', 'mp4', // Force merged output as mp4
        '--newline', // Outputs progress as newline-separated text
        playlistUrl
    ];

    const downloader = spawn(command, args);

    let progressBar = null;

    downloader.stdout.on('data', (data) => {
        const output = data.toString();

        // Look for progress lines from yt-dlp
        const match = output.match(/\[download\]\s+(\d+\.\d+)% of ~?\s*([\d.]+\w+)/);
        if (match) {
            const percent = parseFloat(match[1]);
            const totalSize = match[2];

            // Initialize the progress bar if not done yet
            if (!progressBar) {
                progressBar = new ProgressBar(`Downloading [:bar] :percent of ${totalSize}`, {
                    total: 100,
                    width: 40,
                    complete: '=',
                    incomplete: ' ',
                });
            }

            // Update the progress bar
            progressBar.update(percent / 100);
        }
        console.log(output); // Log each line from yt-dlp (useful for debugging)
    });

    downloader.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    downloader.on('close', (code) => {
        if (code === 0) {
            console.log('Download completed successfully!');
        } else {
            console.log(`Download process exited with code ${code}`);
        }
    });
}

// Provide the playlist URL here
const playlistUrl = 'https://www.youtube.com/@IhabRamziyallaspeak/playlists';
downloadPlaylistWithProgress(playlistUrl);
