const path = require("path");
const WebpackShellPlugin = require("webpack-shell-plugin");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/app.ts",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  watch: NODE_ENV === "development",
  externals: [nodeExternals()],
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ["npx nps local.run"]
    })
  ]
};
