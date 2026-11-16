# DeployX – Notes API

A containerized Notes API built using Node.js and Express as part of the CodGen DevOps Internship – Week 1.

## Project Overview

This project demonstrates Docker containerization, multi-stage Docker builds, non-root container execution, and automated Docker image publishing using GitHub Actions.

## Technologies Used

- Node.js
- Express.js
- Docker
- Docker Hub
- GitHub Actions
- Git and GitHub

## Project Structure

```text
deployx-pipeline/
├── .github/
│   └── workflows/
│       └── docker-publish.yml
├── app/
│   ├── Dockerfile
│   ├── Dockerfile.v2
│   ├── .dockerignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── .gitignore
└── README.md
```

## Run Locally

```bash
cd app
npm install
node server.js
```

API runs on port 3000.

## Docker Build

Run from the project root:

```bash
docker build -t deployx-notes-api:week1 ./app
```

## Run Docker Container

```bash
docker run -d --name deployx-week1-test -p 3002:3000 deployx-notes-api:week1
```

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /health | Health check |
| GET | /notes | Retrieve notes |
| POST | /notes | Create a note |

### Example API Test

```powershell
Invoke-RestMethod http://localhost:3002/health
```

Create a note:

```powershell
Invoke-RestMethod -Method POST `
  -Uri http://localhost:3002/notes `
  -ContentType "application/json" `
  -Body '{"text":"DeployX Week 1 test"}'
```

## Docker Security

- Multi-stage Docker build.
- Production dependencies only.
- Runs using the non-root `node` user.
- Uses Node.js slim base image.

## Docker Hub

Image: `deployx/deployx-notes-api`

Available tags:

- `1.0`
- `latest`
- `week1`

Pull the Week 1 image:

```bash
docker pull deployx/deployx-notes-api:week1
```

## CI/CD Pipeline

GitHub Actions workflow:

`.github/workflows/docker-publish.yml`

The workflow is configured to build and publish Docker images when code is pushed to the main branch.

## GitHub Repository

https://github.com/kpurnachandrarao99/deployx-pipeline

## Internship

CodGen DevOps Internship – Week 1: Containerize It