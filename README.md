# YouTube Playlist Downloader

This repository provides a script for downloading YouTube playlists as high-quality video files. The script uses `yt-dlp` and `ffmpeg` to download and merge video and audio files into a single file.

## Features
- Downloads YouTube playlists in high-quality (up to 1080p)
- Merges audio and video using `ffmpeg`
- Shows download progress in the terminal

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed, then install the required Node packages:
   ```bash
   npm install progress
   ```

3. **Download and Set Up `yt-dlp` and `ffmpeg`**
   - Download `yt-dlp.exe` from the [yt-dlp releases page](https://github.com/yt-dlp/yt-dlp/releases/latest) and save it in a folder (e.g., `C:\yt-dlp\`).
   - Download `ffmpeg.exe` from the [ffmpeg website](https://ffmpeg.org/download.html), extract it, and save `ffmpeg.exe` in a folder (e.g., `C:\ffmpeg\`).

4. **Configure Paths**
   Open the script file and set the paths to `yt-dlp` and `ffmpeg`:
   ```javascript
   const ytDlpPath = 'C:\yt-dlp\yt-dlp.exe'; // Update to the actual path
   const ffmpegPath = 'C:\ffmpeg\ffmpeg.exe'; // Update to the actual path
   ```

5. **Run the Script**
   Provide your playlist URL and run the script:
   ```bash
   node downloadPlaylist.js
   ```

## Usage

1. Modify `playlistUrl` in the script to the YouTube playlist you want to download.
2. Run `node downloadPlaylist.js` to start downloading videos.

## Backlog (User Stories)

- [x] Add functionality to download video and audio from YouTube playlists
- [x] Integrate `yt-dlp` for high-quality video downloads
- [x] Integrate `ffmpeg` to merge audio and video files
- [x] Add a progress bar to show download status
- [ ] Create a setup script for easier installation
- [ ] Add error handling for unsupported formats or unavailable videos
