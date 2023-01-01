# FROM node:18-slim AS builder
# # Install pnpm
# ENV NODE_ENV development
# ENV PNPM_HOME="/root/.local/share/pnpm"
# ENV PATH="${PATH}:${PNPM_HOME}"
# SHELL ["/bin/bash", "-c"]
# RUN npm install --global pnpm \
#     && SHELL=bash pnpm setup \
#     && source /root/.bashrc
# RUN pnpm install -g turbo
# WORKDIR /app
# COPY /package.json /pnpm-lock.yaml /turbo.json /pnpm-workspace.yaml /.gitignore /.npmrc ./
# COPY /packages ./packages
# COPY /apps/nextjs/public ./apps/nextjs/public
# COPY /apps/nextjs/pages ./apps/nextjs/pages
# COPY /apps/nextjs/styles ./apps/nextjs/styles
# COPY /apps/nextjs/services ./apps/nextjs/services
# COPY /apps/nextjs/next.config.js /apps/nextjs/tsconfig.json /apps/nextjs/tailwind.config.js /apps/nextjs/.eslintrc.js ./apps/nextjs/
# # WORKDIR /app/apps/nextjs
# WORKDIR /app
# RUN pnpm install

# CMD turbo run dev --parallel --no-cache --filter=@fullpower-stack/nextjs
FROM node:18.6.0-slim AS builder
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
FROM node:18.6.0-slim AS installer
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

# Run the app
FROM node:18.6.0-slim AS runner
# Install pnpm
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
ENV NEXT_PUBLIC_IS_DOCKER=1
SHELL ["/bin/bash", "-c"]
RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc


WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=installer --chown=nextjs:nodejs /app .

USER nextjs

CMD pnpm turbo run dev --filter=@fullpower-stack/database --filter=@fullpower-stack/nextjs --parallel --no-cache


