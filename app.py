from flask import Flask, render_template, request, jsonify
import os 
from dotenv import load_dotenv
from google import genai
load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_KEY")
)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/chat", methods = ['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message','').strip()

    response = client.interactions.create(
    model="gemini-3.8-flash",
    input=user_message
    )

    reply = response.output_text
    return jsonify({'reply':reply})


if __name__ == '__main__':
    app.run(debug=True)
