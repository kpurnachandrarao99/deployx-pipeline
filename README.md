# DeployX Pipeline – Notes API

## Project Overview

DeployX is a Node.js and Express-based Notes API. The application provides API endpoints for managing notes and can be containerized using Docker.

## Project Structure

```text
deployx-pipeline/
├── app/
│   ├── .dockerignore
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── README.md
├── .gitignore
└── README.md
```

## Technologies Used

- Node.js
- Express.js
- Docker
- Git and GitHub

## Run Locally

Navigate to the application folder:

```bash
cd app
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The API runs on port 3000 by default.

## Docker

Build the Docker image from the `app` folder:

```bash
docker build -t deployx-api:v2 .
```

Run the container:

```bash
docker run -p 3000:3000 deployx-api:v2
```

## Health Check

Test the health endpoint:

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{"status":"ok"}
```

## Repository

GitHub: https://github.com/kpurnachandrarao99/deployx-pipeline
