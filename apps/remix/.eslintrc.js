
/** @type {import('eslint').Linter.Config} */
module.exports = {
  // https://github.com/eslint/eslint/issues/13385
  root: true,
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node"
  ],
};
