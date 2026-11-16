# DeployX - Notes API



A containerized Notes API built using Node.js and Express as part of the CodGen DevOps Internship - Week 1.



## Project Overview



This project demonstrates Docker containerization and automated Docker image publishing using GitHub Actions.



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

|-- .github/

|   |-- workflows/

|       |-- docker-publish.yml

|-- app/

|   |-- Dockerfile

|   |-- Dockerfile.v2

|   |-- .dockerignore

|   |-- package.json

|   |-- package-lock.json

|   |-- server.js

|-- .gitignore

|-- README.md

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

docker build -f app/Dockerfile.v2 -t deployx-notes-api:1.0 app

```



## Run Docker Container



```bash

docker run -d --name deployx-container -p 3000:3000 deployx-notes-api:1.0

```



## API Endpoints



| Method | Endpoint | Purpose |

|---|---|---|

| GET | /health | Health check |

| GET | /notes | Retrieve notes |

| POST | /notes | Create a note |



## Docker Hub



Image: `deployx/deployx-notes-api`



Available tags:

- `1.0`

- `latest`



Pull image:



```bash

docker pull deployx/deployx-notes-api:latest

```



## CI/CD Pipeline



GitHub Actions automatically builds and pushes Docker images to Docker Hub whenever code is pushed to the main branch.



Workflow file:



`.github/workflows/docker-publish.yml`



## GitHub Repository



https://github.com/kpurnachandrarao99/deployx-pipeline



## Internship



CodGen DevOps Internship - Week 1: Containerize It


