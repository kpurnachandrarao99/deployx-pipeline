# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Stage 2: Production stage
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy application from build stage
COPY --from=build --chown=appuser:appgroup /app .

# Switch to non-root user
USER appuser

EXPOSE 3000

CMD ["npm", "start"]