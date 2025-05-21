# Backend Overview

The backend is a Node.js service built with Express and TypeScript. It provides RESTful APIs, manages job queues, and handles authentication.

## Highlights

- **API Structure**: Routes are defined under `src/api` with controllers and services.
- **Database**: Uses PostgreSQL with Prisma for data modeling.
- **Job Queue**: BullMQ manages media processing tasks.
- **Authentication**: JSON Web Tokens (JWT) secure the API.

## Development

```bash
# start the dev server
cd packages/backend
npm install
npm run dev
```

Run tests with Jest:

```bash
npm test
```

