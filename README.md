# Caption Genie

Caption Genie is a media transcription service with a React frontend and Node.js backend, designed to provide easy and accurate transcriptions for various media files.

## Project Structure

This project uses a monorepo structure with separate packages for the frontend and backend:

```
├── packages/
│   ├── frontend/     # React/TypeScript frontend
│   └── backend/      # Node.js/TypeScript backend
```

## Features

- User authentication (login/register/logout)
- Theme switching (light/dark mode)
- Protected routes for authenticated users
- API integration with React Query
- Type-safe API requests

## Technologies Used

### Frontend
- React with TypeScript
- React Router for navigation
- React Query for data fetching
- Styled Components for styling
- Context API for state management

### Backend
- Node.js with TypeScript
- Express for API routing
- JWT for authentication
- Winston for logging

## Development Status

- [x] Repository setup and initial structure
- [x] Backend configuration with Node.js/TypeScript
- [x] Frontend setup with React
- [ ] Documentation setup
- [ ] CI/CD pipeline configuration

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/MomoFadaly/caption-genie.git
cd caption-genie
```

2. Install dependencies
```bash
npm install
```

3. Start the development servers
```bash
# Start both frontend and backend
npm run dev

# Start only frontend
npm run dev:frontend

# Start only backend
npm run dev:backend
```

## License

This project is licensed under the MIT License.
