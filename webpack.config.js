const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve("../backend/client/static/js/"),
    filename: "[name].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({
      path: __dirname + "/../backend",
      filename: "webpack-stats.json",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
