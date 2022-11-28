module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --cache",
    // disabled as recommended here https://github.com/antfu/eslint-config
    // "prettier --write --ignore-unknown --cache",
    // "vitest related"
  ],
};
