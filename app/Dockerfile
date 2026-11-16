
# Use an official Node.js slim image with a version tag
FROM node:26-bookworm-slim

# Set working directory
WORKDIR /app

# Copy dependency files first for Docker layer caching
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Application port
EXPOSE 3000

# Start Notes API
CMD ["node", "server.js"]
