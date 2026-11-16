
# Stage 1: Install production dependencies
FROM node:26-bookworm-slim AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


# Stage 2: Create lean production image
FROM node:26-bookworm-slim AS production

WORKDIR /app

# Production environment
ENV NODE_ENV=production

# Copy only required files from dependencies stage
COPY --from=dependencies --chown=node:node /app/node_modules ./node_modules

COPY --chown=node:node package*.json ./
COPY --chown=node:node server.js ./

# Run as non-root user
USER node

EXPOSE 3000

CMD ["node", "server.js"]
