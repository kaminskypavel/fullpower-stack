// migrated from next-transpile-modules
// https://github.com/martpie/next-transpile-modules/releases/tag/the-end

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@fullpower-stack/ui",
    "@fullpower-stack/express-backend",
  ],
  // we will be doing the same thing as trpc.ts in createTRPCNext
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api',
  //       destination: 'http://localhost:4000',
  //     },
  //   ]
  // },
};

module.exports = nextConfig;
