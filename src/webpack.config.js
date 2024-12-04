const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: "source-map", // Source map generation must be turned on
  plugins: [
    new Dotenv(),
    sentryWebpackPlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
};
