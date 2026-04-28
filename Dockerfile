FROM node:20-alpine AS base
RUN npm install -g pnpm

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/vyntrize-website/package.json ./apps/vyntrize-website/
RUN pnpm install --filter vyntrize-website --frozen-lockfile

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/vyntrize-website/node_modules ./apps/vyntrize-website/node_modules
COPY apps/vyntrize-website ./apps/vyntrize-website
COPY package.json pnpm-workspace.yaml ./

WORKDIR /app/apps/vyntrize-website
RUN pnpm db:generate
RUN pnpm build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3013

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/vyntrize-website/public ./public 2>/dev/null || true
COPY --from=builder --chown=nextjs:nodejs /app/apps/vyntrize-website/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/vyntrize-website/.next/static ./.next/static

USER nextjs

EXPOSE 3013

CMD ["node", "server.js"]
