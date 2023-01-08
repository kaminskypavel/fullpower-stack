FROM node:lts-bullseye-slim AS builder
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
RUN turbo prune --scope=@fullpower-stack/vite --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:lts-bullseye-slim AS installer

# we need this so vite can inject the correct backend api
ENV NODE_ENV test

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
RUN pnpm turbo run build --scope=@fullpower-stack/vite

# Run the app
FROM node:lts-bullseye-slim AS runner
ENV NODE_ENV production

# Install pnpm
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
SHELL ["/bin/bash", "-c"]
RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc


WORKDIR /app

# maybe we dont need this if we use vite dev server
RUN npm i -g http-server

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 vite
USER vite

# COPY --from=installer --chown=vite:nodejs /app ./
# EXPOSE 5173
# CMD pnpm dev:vite

COPY --from=installer --chown=vite:nodejs /app/apps/vite/dist ./
EXPOSE 5173
CMD http-server -p 5173
