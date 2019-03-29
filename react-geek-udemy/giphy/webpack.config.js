const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      },
      {
        test: /.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin()
  ],
  mode: "development",
  devServer: {
    contentBase: "./",
    hot: true,
    historyApiFallback: true
    // to make react-router work and not serve other pages from various routes
  }
};
