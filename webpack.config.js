const path = require("path");
module.exports = {
  entry: "./src/browser/index.ts",
  output: {
    filename: "browser.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
