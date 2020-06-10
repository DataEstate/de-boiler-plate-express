const { series } = require("nps-utils");

module.exports = {
  scripts: {
    default: "npx nps local",
    local: {
      description: "Local development server",
      default: "npx nps local.run",
      run:
        "cross-env NODE_ENV=local webpack-dev-server --open --mode development --config ./webpack.components.config.js",
    },
    server: {
      description: "Local development server",
      default: series("npx nps server.build", "npx nps server.run"),
      build: "NODE_ENV=development webpack -w --config ./webpack.api.config.js",
      run: "NODE_ENV=development nodemon build/app.js",
    },
  },
};
