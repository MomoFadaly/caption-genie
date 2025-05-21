# Deployment Guide

This document outlines approaches for deploying Caption Genie to production.

## Docker

A `Dockerfile` is provided for both the frontend and backend. Build images and run containers with docker compose:

```bash
docker compose up --build
```

## Cloud Providers

Deployment can be adapted to services such as AWS, Google Cloud, or Azure. Provision a database and Redis instance, then configure environment variables as described in `.env.example`.

## CI/CD

GitHub Actions workflows handle linting, testing, and deployment. See `.github/workflows` for details.

