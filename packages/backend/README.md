# Caption Genie Backend

Backend service for Caption Genie media transcription application.

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express
- **Database**: PostgreSQL
- **Cache & Queue**: Redis, BullMQ
- **Authentication**: JWT with bcrypt
- **Testing**: Jest, Supertest

## Directory Structure

```
src/
├── api/                 # API endpoints and controllers
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Data models
│   ├── routes/          # Route definitions
│   └── services/        # Business logic
├── config/              # Configuration (environment, etc.)
├── types/               # TypeScript type definitions
├── tests/               # Test files
│   ├── unit/            # Unit tests
│   └── integration/     # Integration tests
└── utils/               # Utility functions
```

## Getting Started

### Prerequisites

- Node.js v18.0.0 or later
- PostgreSQL
- Redis

### Installation

1. Navigate to the backend directory:
   ```
   cd packages/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the project root based on `.env.example`.

4. Build the project:
   ```
   npm run build
   ```

5. Start the development server:
   ```
   npm run dev
   ```

### Scripts

- `npm run build` - Build the TypeScript code
- `npm run start` - Start the production server
- `npm run dev` - Start the development server with hot reloading
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run all tests
- `npm run test:unit` - Run unit tests
- `npm run test:integration` - Run integration tests

## API Endpoints

The following endpoints will be implemented:

- **Auth**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login with credentials
  - `POST /api/auth/refresh` - Refresh JWT token

- **Users**
  - `GET /api/users/me` - Get current user
  - `PUT /api/users/me` - Update current user

- **Media**
  - `POST /api/media` - Upload new media
  - `GET /api/media` - List user's media
  - `GET /api/media/:id` - Get media details
  - `DELETE /api/media/:id` - Delete media

- **Transcriptions**
  - `GET /api/transcriptions/:id` - Get transcription
  - `GET /api/transcriptions/:id/download` - Download transcription

## Deployment

For deployment instructions, see the main project README. 