FROM node:18-slim AS builder
# RUN apk add --no-cache libc6-compat
# RUN apk add --no-cache bash
#https://turbo.build/repo/docs/handbook/deploying-with-docker
#https://github.com/vercel/turbo/tree/main/examples/with-docker

# Install pnpm
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
SHELL ["/bin/bash", "-c"]
RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc

WORKDIR /app
RUN pnpm install -g turbo
COPY . .
RUN turbo prune --scope=@fullpower-stack/nextjs --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18-slim AS installer
# RUN apk add --no-cache libc6-compat
# RUN apk add --no-cache bash
WORKDIR /app

# Install pnpm
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
SHELL ["/bin/bash", "-c"]
RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# https://playwright.dev/docs/browsers
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD 1

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN pnpm install
RUN pnpm turbo run build --filter=@fullpower-stack/nextjs

# Run the app
FROM node:18-slim AS runner
# RUN apk add --no-cache libc6-compat
# RUN apk add --no-cache bash
ENV NODE_ENV production

# Install pnpm
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
SHELL ["/bin/bash", "-c"]
RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc


WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/nextjs/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/nextjs/.next/static ./apps/nextjs/.next/static

COPY --from=installer /app/apps/nextjs/public ./apps/nextjs/public
COPY --from=installer /app/apps/nextjs/next.config.js ./apps/nextjs
COPY --from=installer /app/apps/nextjs/package.json ./apps/nextjs

CMD node apps/nextjs/server.js
