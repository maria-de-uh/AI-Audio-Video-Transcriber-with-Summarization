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