/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.{test,spec}.{js,jsx,ts,tsx}"],
  serverDependenciesToBundle: ['@fullpower-stack/ui'],
  watchPaths: [
    './../../packages/ui/**/*.tsx',
  ],

};
