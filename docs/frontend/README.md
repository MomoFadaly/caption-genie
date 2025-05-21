# Frontend Overview

This directory contains the React application for Caption Genie. It is built with TypeScript and managed with Vite for fast development.

## Key Concepts

- **Component Structure**: Components live in `src/components` and follow a feature-based organization.
- **State Management**: React Context and React Query handle global and remote state.
- **Styling**: Styled Components provides scoped, themeable styles.
- **Routing**: React Router defines navigation within the app.

## Development

```bash
# start the dev server
cd packages/frontend
npm install
npm run dev
```

Tests are written with Vitest and Testing Library:

```bash
npm test
```

