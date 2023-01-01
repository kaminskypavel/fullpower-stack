module.exports = {
  extends: [
    "plugin:@next/next/recommended",
    "@fullpower-stack/eslint-config-custom",
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  ignorePatterns: ["node_modules/", ".next/", "next.config.js"],
};
