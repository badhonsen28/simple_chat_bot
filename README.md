# Flask AI Chatbot

A simple web chatbot built with Flask and the Google Gemini API. Type a message, and the AI replies in a clean chat interface.

## Features

- Chat interface with user and bot message bubbles
- Flask backend that talks to the Gemini API
- Responsive design that works on desktop and mobile
- API key kept private via environment variables

## Project Structure

```
.
├── app.py              # Flask server and /chat endpoint
├── requirements.txt    # Python dependencies
├── .gitignore          # Keeps .env and venv out of Git
├── templates/
│   └── index.html      # Chat page
└── static/
    ├── style.css       # Styling
    └── chat.js         # Frontend logic
```

## Run Locally

1. Clone the repo and open the folder:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate      # Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the project root:
   ```
   GEMINI_KEY=your_api_key_here
   ```
   Get a key from [Google AI Studio](https://aistudio.google.com/).

5. Start the app:
   ```bash
   python app.py
   ```
   Open http://127.0.0.1:5000 in your browser.



## Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_KEY` | Your Google Gemini API key |

## Tech Stack

- Python, Flask, Gunicorn
- Google Gemini API (`google-genai`)
- HTML, CSS, vanilla JavaScript
