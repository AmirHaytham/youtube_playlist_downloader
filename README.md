# YouTube Playlist Downloader

This repository provides a script for downloading YouTube playlists, channels, or individual videos as high-quality video files. The script utilizes `yt-dlp` and `ffmpeg` to download and merge video and audio files into a single, unified file.

## Table of Contents
- [Features](#features)
- [Motivation](#motivation)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Required Dependencies](#install-required-dependencies)
  - [Download and Set Up Tools](#download-and-set-up-tools)
- [Usage](#usage)
- [Backlog (User Stories)](#backlog-user-stories)
- [License](#license)

## Features
- Download YouTube playlists, individual videos, or all videos from a channel.
- Download videos in high-quality (up to 1080p).
- Automatically merge video and audio using `ffmpeg`.
- Show download progress in the terminal with an easy-to-read progress bar.

## Motivation
I created this script because I needed to download some educational courses from YouTube for offline viewing. Specifically, I wanted to download:

1. A YouTube playlist containing AWS courses: [AWS Course Playlist](https://www.youtube.com/watch?v=E3nLSHQtLes&list=PLOoZRfEtk6kWSM_l9xMjDh-_MJXl03-pf).
2. Another English course by Mr. Ihab Ramzi, available on his channel: [Ihab Ramzi's Channel](https://www.youtube.com/@IhabRamziyallaspeak/featured).

This script allows you to provide a link to an individual video, a playlist, or even the entire videos page of a channel, such as [Ihab Ramzi's Videos](https://www.youtube.com/@IhabRamziyallaspeak/videos), and it can download all the videos efficiently.

## Installation

### Prerequisites
- **Node.js**: Download and install Node.js from the [official Node.js website](https://nodejs.org/).
- **Python**: `yt-dlp` requires Python. Install it from the [official Python website](https://www.python.org/downloads/) and add it to your system PATH.

To verify the installations, open a terminal and run:

```bash
node -v
npm -v
python --version
```

### Clone the Repository
Clone the repository to your local machine and navigate into the project directory:

```bash
git clone https://github.com/AmirHaytham/youtube_playlist_downloader.git
cd youtube_playlist_downloader
```

### Install Required Dependencies
Install the required Node.js packages:

```bash
npm install progress
```

### Download and Set Up Tools

- **Download `yt-dlp`**:
  - Visit the [yt-dlp releases page](https://github.com/yt-dlp/yt-dlp/releases/latest) and download the `yt-dlp.exe` file.
  - Save `yt-dlp.exe` in a directory, such as `C:\yt-dlp\`.

- **Download `ffmpeg`**:
  - Visit the [ffmpeg download page](https://ffmpeg.org/download.html), and download a Windows build (e.g., from gyan.dev).
  - Extract the downloaded ZIP file and locate `ffmpeg.exe` in the `bin` folder.
  - Move `ffmpeg.exe` to a directory, such as `C:\ffmpeg\bin\`.

### Add `yt-dlp` and `ffmpeg` to Your Script
Update the script file (`downloadPlaylist.js`) with the correct paths to `yt-dlp` and `ffmpeg`:

```javascript
// Paths to yt-dlp and ffmpeg executables
const ytDlpPath = 'C:\\yt-dlp\\yt-dlp.exe'; // Update to the actual path where yt-dlp.exe is located
const ffmpegPath = 'C:\\ffmpeg\\bin\\ffmpeg.exe'; // Update to the actual path where ffmpeg.exe is located
```

## Usage
1. Set the desired playlist, video, or channel URL in the `playlistUrl` variable within the script.

   Example URLs:
   - Playlist URL: `https://www.youtube.com/watch?v=E3nLSHQtLes&list=PLOoZRfEtk6kWSM_l9xMjDh-_MJXl03-pf`
   - Channel videos page: `https://www.youtube.com/@IhabRamziyallaspeak/videos`

2. Run the script to start downloading videos:

   ```bash
   node downloadPlaylist.js
   ```

   This command will start the download process, showing progress for each video in the terminal.

## Backlog (User Stories)
- [x] Add functionality to download video and audio from YouTube playlists.
- [x] Integrate `yt-dlp` for high-quality video downloads.
- [x] Integrate `ffmpeg` to merge audio and video files.
- [x] Add a progress bar to show download status.
- [x] Add functionality to download all videos from a channel.
- [ ] Create a setup script for easier installation.
- [ ] Add error handling for unsupported formats or unavailable videos.
