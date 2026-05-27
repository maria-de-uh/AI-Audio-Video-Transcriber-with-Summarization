from flask import Flask, request, jsonify
from flask_cors import CORS
import whisper
import os
from transformers import pipeline

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

print("Loading Whisper model...")
model = whisper.load_model("base")
print("Model loaded!")
print("Loading summarizer...")

summarizer = pipeline(
    "summarization",
    model="t5-small"
)

print("Summarizer loaded!")

@app.route("/upload", methods=["POST"])
def upload_file():
    print("Request received")

    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    file.save(filepath)

    print("Transcribing...")

    result = model.transcribe(filepath)

    transcript = result["text"]

    summary_result = summarizer(
    "summarize: " + transcript,
    max_length=80,
    min_length=20,
    do_sample=False
)

    summary = summary_result[0]["summary_text"]
    return jsonify({
        "transcript": transcript,
        "summary": summary
    })

if __name__ == "__main__":
    app.run(debug=True)