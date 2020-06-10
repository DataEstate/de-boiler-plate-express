const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    entry: {
      index: "./src/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].bundle.js",
    },
    devServer: {
      port: 9004,
      historyApiFallback: true,
      compress: true,
      proxy: {
        "/api": "http://localhost:3000",
      },
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ["ts-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx"],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        inject: true,
      }),
    ],
  };
};
