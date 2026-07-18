# Chat-Bot

A simple command-line chatbot powered by Google's Gemini API. Ask a question in the terminal and get an AI-generated response, with conversation memory maintained across the session.

## Features

- Interactive terminal-based chat
- Maintains conversation history within a session
- Uses Google Gemini (`gemini-2.5-flash-lite`) for responses
- API key kept out of source code via environment variables

## Prerequisites

- [Node.js](https://nodejs.org) (LTS version recommended)
- A Google Gemini API key ([get one for free here](https://aistudio.google.com/apikey))

## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**

   This repo does not include a `.env` file (it's git-ignored for security). You need to create one yourself in the project root:
   ```bash
   cp .env.example .env
   ```
   On Windows (PowerShell):
   ```powershell
   copy .env.example .env
   ```

4. **Add your Gemini API key**

   Open the `.env` file in any text editor and add your key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
   Get a free API key from [Google AI Studio](https://aistudio.google.com/apikey).

## Usage

Start the chatbot:
```bash
npm start
```

You'll see a prompt in the terminal:
```
Ask me anything -->
```

Type your question and press Enter to get a response. Type `exit` to quit.

## Project Structure

```
chatbot/
├── chat.js           # Main chatbot script
├── package.json      # Project dependencies and scripts
├── .env.example       # Template for environment variables
├── .env               # Your API key (create this — not included in repo)
└── README.md
```

## Troubleshooting

| Issue | Fix |
|---|---|
| `npm` not recognized | Install Node.js from [nodejs.org](https://nodejs.org) |
| PowerShell script execution disabled | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| `401 Unauthenticated` error | Check that your `.env` file exists and contains a valid API key |
| `429 Quota exceeded` error | Make sure your API key starts with `AIzaSy` (older key format). If not, generate a fresh key from a different Google account |

## Notes

- Never commit your `.env` file or share your API key publicly.
- This is a simple chat interface only — it does not read or retrieve information from external documents.

## License

MIT
