// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(["@fullpower-stack/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
