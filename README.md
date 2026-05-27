
# AI Audio & Video Transcriber with Summarization

An AI-powered web application that allows users to upload audio or video files, automatically transcribe the content using Whisper AI, and generate concise summaries using NLP models.

---

## Features

- Upload MP3 / MP4 / WAV files
- Automatic speech-to-text transcription
- AI-generated summary
- React frontend
- Flask backend
- Dark neon-themed UI
- Fully local and free setup

---

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Flask
- Flask-CORS
- Whisper AI
- HuggingFace Transformers
- FFmpeg

---

## Project Structure

```bash
project/
│
├── backend/
│   ├── app.py
│   ├── uploads/
│
├── frontend/
│   ├── src/
│   ├── public/
│
└── README.md
````

---

## Installation

# 1. Clone Repository

```bash
git clone <your-repository-link>
cd project
```

---

# 2. Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install flask flask-cors openai-whisper transformers torch sentencepiece
```

---

# 3. Install FFmpeg

Download FFmpeg:

[https://ffmpeg.org/download.html](https://ffmpeg.org/download.html)

Add FFmpeg `bin` folder to system PATH.

Verify installation:

```bash
ffmpeg -version
```

---

# 4. Run Backend

```bash
python app.py
```

---

# 5. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
npm install axios
```

Run React app:

```bash
npm start
```

---

## Usage

1. Upload an audio/video file
2. Click Upload
3. Wait for transcription and summarization
4. View transcript and summary on screen

---

## Supported File Formats

* MP3
* MP4
* WAV
* M4A

---

## Models Used

### Speech-to-Text

* Whisper Base Model

### Summarization

* T5 Small

---

## Screenshots

![alt text](image\image.png)

---

## Future Improvements

* Drag and drop upload
* Loading animations
* Download transcript as PDF
* Multi-language support
* Cloud deployment
* User authentication
* Database integration

---

## Author

Maria Deepti

---

## License

This project is open-source and available for educational purposes.

```
```
