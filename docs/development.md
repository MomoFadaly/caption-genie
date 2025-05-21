# Development Guide

This guide explains how to set up a local environment for contributing to Caption Genie.

## Prerequisites

- Node.js 18+
- PostgreSQL and Redis services

## Setup

1. Install dependencies at the project root:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and update values.
3. Start the backend and frontend in parallel:
   ```bash
   npm run dev
   ```

## Useful Commands

- `npm run lint` – run ESLint across packages
- `npm run test` – run all tests
- `npm run build` – build packages for production

