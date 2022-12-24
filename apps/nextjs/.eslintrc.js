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
};
