const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [__dirname, "node_modules/"]
    // the above is responsible for setting absolute paths
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv()],
  mode: "development",
  devServer: {
    contentBase: "./",
    hot: true
  }
};
