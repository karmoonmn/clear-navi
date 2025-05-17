from flask import Flask, request, jsonify
import os
import requests
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
DASHSCOPE_API_KEY = os.getenv("DASHSCOPE_API_KEY")
APP_ID = os.getenv("DASHSCOPE_APP_ID")

if not DASHSCOPE_API_KEY or not APP_ID:
    raise EnvironmentError("Missing DASHSCOPE_API_KEY or DASHSCOPE_APP_ID in environment")

BASE_API_URL = "https://dashscope-intl.aliyuncs.com/api/v1/apps"
api_url = f"{BASE_API_URL}/{APP_ID}/completion"

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    prompt_text = data.get("message")

    if not prompt_text:
        return jsonify({"reply": "Missing 'message' in request body"}), 400

    headers = {
        "Authorization": f"Bearer {DASHSCOPE_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "input": {
            "prompt": prompt_text
        },
        "parameters": {},
        "debug": {}
    }

    try:
        response = requests.post(api_url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        result = response.json()

        reply = result.get("output", {}).get("text", "No reply from backend")

        return jsonify({"reply": reply})

    except requests.exceptions.RequestException as e:
        print("API call error:", e)
        return jsonify({"reply": "Something went wrong with the LLM."}), 500

@app.route("/")
def home():
    return "Hello from Flask!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)


@app.route('/chat', methods=['POST'])
def chat_adapter():
    data = request.get_json()
    user_message = data.get("message")
    if not user_message:
        return jsonify({"error": "Missing 'message' in request body"}), 400

    headers = {
        "Authorization": f"Bearer {DASHSCOPE_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "input": {
            "prompt": user_message
        },
        "parameters": {},
        "debug": {}
    }
    try:
        response = requests.post(api_url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        result = response.json()

        print("API response:", result)
        reply = result.get("data", {}).get("result")
        if not reply:
            reply = result.get("reply")
        if not reply:
            reply = "No reply from backend"

        return jsonify({"reply": reply})

    except requests.exceptions.RequestException as e:
        return jsonify({"reply": "Error from backend: " + str(e)}), 500
