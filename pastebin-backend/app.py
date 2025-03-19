from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
from waitress import serve  # Import Waitress for production deployment

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# In-memory storage (Use a database in production)
pastes = {}

@app.route("/")
def home():
    return jsonify({"message": "Welcome to Pastebin API!"})

# Route to create a new paste
@app.route("/paste", methods=["POST"])
def create_paste():
    data = request.json
    if "content" not in data:
        return jsonify({"error": "Content is required"}), 400

    paste_id = str(uuid.uuid4())[:8]  # Generate a short unique ID
    pastes[paste_id] = data["content"]

    return jsonify({"paste_id": paste_id}), 201

# Route to retrieve a paste
@app.route("/paste/<paste_id>", methods=["GET"])
def get_paste(paste_id):
    content = pastes.get(paste_id)
    if content is None:
        return jsonify({"error": "Paste not found"}), 404

    return jsonify({"content": content})

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=8000)  # Use Waitress to serve the app
