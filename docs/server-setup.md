# Caption Genie Server Setup Guide

This guide explains how to set up and run the Caption Genie frontend and backend servers.

## Prerequisites

- Node.js v18 or higher
- npm v8 or higher
- PostgreSQL database
- Redis server (for job processing)

## Environment Configuration

1. Copy the example environment file:
   ```
   cp .env.example .env
   ```

2. Update the environment variables in `.env` as needed. The key settings are:

   - `PORT`: Backend server port (default: 4000)
   - `DATABASE_URL`: PostgreSQL connection string
   - `REDIS_URL`: Redis connection string
   - `JWT_SECRET` and `JWT_REFRESH_SECRET`: Secret keys for JWT authentication

## Starting the Servers

### Development Mode

1. **Frontend Server**:
   ```
   cd packages/frontend
   npm install
   npm run dev
   ```
   The frontend will be available at http://localhost:3000

2. **Backend Server**:
   ```
   cd packages/backend
   npm install
   npm run dev
   ```
   The backend API will be available at http://localhost:4000/api

3. **Both servers with Turborepo** (from project root):
   ```
   npm install
   npm run dev
   ```

### Production Mode

1. Build the applications:
   ```
   npm run build
   ```

2. Start the production servers:
   ```
   npm start
   ```

## Key Server Components

### Backend

- Express.js API with TypeScript
- PostgreSQL database with Prisma ORM
- JWT authentication
- Media processing with queue-based system
- Winston for logging

### Frontend

- React with TypeScript
- Vite for fast development
- Styled-components for styling
- React Query for data fetching
- Context API for state management

## Debugging Notes

If you encounter module resolution issues with path aliases (e.g., `@/...` imports), ensure:

1. The TypeScript configuration has proper path mapping:
   ```json
   "compilerOptions": {
     "baseUrl": ".",
     "paths": {
       "@/*": ["src/*"]
     }
   }
   ```

2. For runtime resolution, the backend uses `module-alias`:
   ```json
   "_moduleAliases": {
     "@": "src"
   }
   ```

3. Module-alias is registered at the top of the entry file:
   ```typescript
   import 'module-alias/register';
   ```

## CI/CD Integration

The project includes GitHub Actions workflows for:
- CI process (lint, build, test)
- Staging deployment from the `develop` branch
- Production deployment from the `main` branch

See the `.github/workflows` directory for implementation details. 