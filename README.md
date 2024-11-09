# YouTube Playlist Downloader

This repository provides a general-purpose script for downloading YouTube playlists, channels, or individual videos as high-quality video files. The script uses `yt-dlp` and `ffmpeg` to download and merge video and audio files into a single file.

## Features
- Downloads YouTube playlists, individual videos, or all videos from a channel
- Downloads in high-quality (up to 1080p)
- Merges audio and video using `ffmpeg`
- Shows download progress in the terminal

## Story

I created this script because I needed to download some courses from YouTube for offline viewing. Specifically, I wanted to download:

1. A YouTube playlist containing AWS courses: [AWS Course Playlist](https://www.youtube.com/watch?v=E3nLSHQtLes&list=PLOoZRfEtk6kWSM_l9xMjDh-_MJXl03-pf).
2. Another English course by Mr. Ihab Ramzi, available on his channel: [Ihab Ramzi's Channel](https://www.youtube.com/@IhabRamziyallaspeak/featured).

The script allows you to provide a link to an individual video, a playlist, or even the entire videos page of a channel, such as [Ihab Ramzi's Videos](https://www.youtube.com/@IhabRamziyallaspeak/videos), and it can download all the videos efficiently.

## Installation

1. **Clone the Repository**  
   Begin by cloning the repository to your local machine. In your terminal, navigate to the directory where you'd like to store the project and run:

   ```bash
   git clone https://github.com/AmirHaytham/youtube_playlist_downloader.git
   cd youtube_playlist_downloader
   ```

2. **Install Node.js (if not already installed)**

   The script requires Node.js to run. If you don’t have Node.js installed, download and install it from the [official Node.js website](https://nodejs.org/).

   To verify the installation, open a terminal and run:

   ```bash
   node -v
   npm -v
   ```

   You should see version numbers for both Node.js and npm.

3. **Install Python (if not already installed)**

   `yt-dlp` requires Python to run. Download and install it from the [official Python website](https://www.python.org/downloads/).

   Make sure to add Python to your system PATH during installation.

   Python is needed because `yt-dlp` relies on it for many of its internal operations, and it ensures compatibility with YouTube's frequently changing video formats.

   To verify Python installation, run:

   ```bash
   python --version
   ```

4. **Install Required Node Packages**  
   Navigate to the project directory and install the required package by running:

   ```bash
   npm install progress
   ```

5. **Download and Set Up `yt-dlp` and `ffmpeg`**

   `yt-dlp` and `ffmpeg` are required for downloading and merging video and audio files.

   - **Download `yt-dlp`**:
     - Go to the [yt-dlp releases page](https://github.com/yt-dlp/yt-dlp/releases/latest) and download the `yt-dlp.exe` file.
     - Save `yt-dlp.exe` in a directory, such as `C:\yt-dlp\`.

   - **Download `ffmpeg`**:
     - Go to the [ffmpeg download page](https://ffmpeg.org/download.html), and download a Windows build (e.g., from gyan.dev).
     - Extract the downloaded ZIP file and locate `ffmpeg.exe` in the `bin` folder.
     - Move `ffmpeg.exe` to a directory, such as `C:\ffmpeg\`.

6. **Add `yt-dlp` and `ffmpeg` to Your Script**

   Open the script file (e.g., `downloadPlaylist.js`) and set the paths to `yt-dlp` and `ffmpeg` by updating the following lines with the correct paths:

   ```javascript
   const ytDlpPath = 'C:\yt-dlp\yt-dlp.exe'; // Path to yt-dlp
   const ffmpegPath = 'C:\ffmpeg\ffmpeg.exe'; // Path to ffmpeg
   ```

7. **Run the Script**

   - Modify the `playlistUrl` variable in the script to the YouTube playlist, video, or channel URL you want to download. This script is designed for general use, so you can use any valid YouTube URL, such as:
     - Playlist URL: `https://www.youtube.com/watch?v=E3nLSHQtLes&list=PLOoZRfEtk6kWSM_l9xMjDh-_MJXl03-pf`
     - Channel videos page: `https://www.youtube.com/@IhabRamziyallaspeak/videos`
   
   - In the terminal, navigate to the project directory and run:

   ```bash
   node downloadPlaylist.js
   ```

   This command will start the download process, showing progress for each video in the terminal.

## Usage

1. Set the desired playlist, video, or channel URL in the `playlistUrl` variable within the script.
2. Run `node downloadPlaylist.js` to download videos to the `downloads` folder.

## Required Packages

This script requires the following packages:
- **progress**: For displaying the download progress in the terminal.

Install it via npm:

```bash
npm install progress
```

## Backlog (User Stories)

- [x] Add functionality to download video and audio from YouTube playlists
- [x] Integrate `yt-dlp` for high-quality video downloads
- [x] Integrate `ffmpeg` to merge audio and video files
- [x] Add a progress bar to show download status
- [x] Add functionality to download all videos from a channel
- [ ] Create a setup script for easier installation
- [ ] Add error handling for unsupported formats or unavailable videos
