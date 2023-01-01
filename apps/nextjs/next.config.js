const path = require("path");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    reactStrictMode: true,

    // migrated from next-transpile-modules
    // https://github.com/martpie/next-transpile-modules/releases/tag/the-end
    transpilePackages: ["@fullpower-stack/ui"],
    serverRuntimeConfig: {
      // Will only be available on the server side
      URI: process.env.NEXT_PUBLIC_IS_DOCKER
        ? "http://express-backend:4000/trpc"
        : "http://localhost:4000/trpc",
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      URI: "http://localhost:4000/trpc",
    },
  };
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return config;
  }

  return {
    ...config,
    // https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    // https://github.com/vercel/turbo/blob/main/examples/with-docker/apps/web/next.config.js
    output: "standalone",
    experimental: {
      // this includes files from the monorepo base two directories up
      outputFileTracingRoot: path.join(__dirname, "../../"),
    },
  };
};
