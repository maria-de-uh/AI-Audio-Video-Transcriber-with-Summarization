import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");

  const handleUpload = async () => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:5000/upload",
      formData
    );

    setTranscript(response.data.transcript);
    setSummary(response.data.summary);
  };

  return (
  <div className="app">

    <div className="container">

      <h1 className="title">
        AI Transcriber
      </h1>

      <p className="subtitle">
        Upload audio or video and generate AI summaries
      </p>

      <div className="upload-section">

        <input
          type="file"
          className="file-input"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          className="upload-btn"
          onClick={handleUpload}
        >
          Upload
        </button>

      </div>

      <div className="output-box">

        <h2 className="output-title">
          Transcript
        </h2>

        <p className="output-text">
          {transcript}
        </p>

      </div>

      <div className="output-box">

        <h2 className="output-title">
          Summary
        </h2>

        <p className="output-text">
          {summary}
        </p>

      </div>

    </div>

  </div>
);
}

export default App;