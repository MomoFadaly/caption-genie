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
- [x] Documentation setup
- [x] CI/CD pipeline configuration

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The following workflows are configured:

### CI Workflow
- Runs on every pull request and push to main/develop branches
- Performs linting, building, and testing
- Uploads test coverage as an artifact

### Selective CI
- Performs incremental builds and tests only on affected packages
- Uses Turborepo's powerful caching and filtering capabilities
- Only runs builds and tests on packages that changed

### Dependency Audit
- Automatically checks for security vulnerabilities
- Runs on schedule (weekly) and when dependencies change
- Creates GitHub issues for any detected security problems

### Staging Deployment
- Triggered on pushes to the `develop` branch
- Deploys the backend to Railway staging environment
- Deploys the frontend to Vercel preview environment

### Production Deployment
- Triggered on pushes to the `main` branch
- Creates GitHub releases automatically
- Deploys to production environments with zero-downtime deployment

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