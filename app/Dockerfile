
# Stage 1: Build dependencies
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Stage 2: Production image
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy required files with correct ownership
COPY --from=build --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --chown=appuser:appgroup package*.json ./
COPY --chown=appuser:appgroup server.js ./

# Run as non-root user
USER appuser

EXPOSE 3000

CMD ["npm", "start"]
