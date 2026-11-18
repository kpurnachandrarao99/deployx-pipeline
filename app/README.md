## Step 8: Push Docker Image to Docker Hub

### Docker Hub Repository

Repository Name: `deployx-api`

Docker Hub Username: `deployx`

Image Name: `deployx/deployx-api`

Image Tag: `1.0`

### Docker Commands

Login:
```bash
docker login
```

Tag image:
```bash
docker tag deployx-api:v2 deployx/deployx-api:1.0
```

Push image:
```bash
docker push deployx/deployx-api:1.0
```

Remove local image:
```bash
docker rmi deployx/deployx-api:1.0
```

Pull and run image:
```bash
docker run -p 3000:3000 deployx/deployx-api:1.0
```

### Verification

Test the health API:
```bash
curl http://localhost:3000/health
```

Expected response:
```json
{"status":"ok"}
```

The Docker Hub image was tested by pulling and running it successfully.