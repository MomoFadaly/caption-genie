# Caption Genie

A media transcription service with AI-powered caption generation.

## Features

- Media downloading from various sources (YouTube, Vimeo, etc.)
- Automatic audio extraction
- High-quality transcription using Google Cloud STT or OpenAI Whisper
- Real-time job status tracking
- Export transcripts in multiple formats (.txt, .srt)
- Secure user authentication

## Project Structure

This is a monorepo containing both frontend and backend services:

```
caption-genie/
├── packages/
│   ├── backend/         # Node.js Express backend
│   └── frontend/        # React frontend application
├── docs/                # Documentation
│   ├── implementation-guides/
│   └── specifications/
└── scripts/             # Project-wide scripts
```

## Getting Started

### Prerequisites

- Node.js 18+
- Docker (optional, for containerization)
- Redis (for job queue)
- PostgreSQL (for data storage)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/caption-genie.git
   cd caption-genie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start development servers:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 