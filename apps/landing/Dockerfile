# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY apps/landing/package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY apps/landing .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./

# Switch to non-root user
USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
