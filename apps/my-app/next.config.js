const path = require("path");

module.exports = {
  reactStrictMode: true,
  output: "standalone",

  experimental: {
    transpilePackages: ["ui", "redux-utils"],
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
