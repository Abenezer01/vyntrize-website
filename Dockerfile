FROM node:20-alpine AS base
RUN npm install -g pnpm

# ── Dependencies ──────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/vyntrize-website/package.json ./apps/vyntrize-website/
COPY packages/@platform/vyntrize-db/package.json ./packages/@platform/vyntrize-db/
RUN pnpm install --filter ai-studio-applet --filter @platform/vyntrize-db --frozen-lockfile

# ── Builder ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/vyntrize-website/node_modules ./apps/vyntrize-website/node_modules
COPY --from=deps /app/packages/@platform/vyntrize-db/node_modules ./packages/@platform/vyntrize-db/node_modules

COPY apps/vyntrize-website ./apps/vyntrize-website
COPY packages/@platform/vyntrize-db ./packages/@platform/vyntrize-db
COPY package.json pnpm-workspace.yaml ./

# Generate Prisma client from the shared package
WORKDIR /app/packages/@platform/vyntrize-db
RUN pnpm db:generate

# Build the website
WORKDIR /app/apps/vyntrize-website
ENV NEXT_OUTPUT=standalone
RUN pnpm build

# ── Runner ────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3013
ENV NEXT_OUTPUT=standalone

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/vyntrize-website/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/vyntrize-website/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/vyntrize-website/.next/static ./.next/static

USER nextjs
EXPOSE 3013
CMD ["node", "server.js"]
