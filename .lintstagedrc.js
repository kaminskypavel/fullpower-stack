module.exports = {
  "*.{jsx,ts,tsx}": [
    "prettier --write --ignore-unknown --cache",
    "eslint --fix --cache",
    // "vitest related"
  ],
};
