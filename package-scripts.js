const { series } = require("nps-utils");

module.exports = {
  scripts: {
    default: "npx nps local",
    local: {
      description: "Local development server",
      default: series("npx nps local.build", "npx nps local.run"),
      build: "NODE_ENV=development webpack -w",
      run: "NODE_ENV=development nodemon build/app.js"
    }
  }
};
