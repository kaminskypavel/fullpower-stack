FROM node:lts-bullseye-slim AS builder
#https://turbo.build/repo/docs/handbook/deploying-with-docker

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
RUN turbo prune --scope=@fullpower-stack/astro --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:lts-bullseye-slim AS installer
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
RUN pnpm turbo run build --filter=@fullpower-stack/astro

ENV NODE_ENV production

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 astro
# USER astro

EXPOSE 3002
ENV PORT 3002

CMD pnpm turbo run start --filter=@fullpower-stack/astro
