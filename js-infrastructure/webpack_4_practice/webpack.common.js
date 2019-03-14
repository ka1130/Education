const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./js/entry.js",
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].shared.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    // ^ tells the server where to find bundled file
    port: 3030,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.mp4$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "video/"
        }
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "image/"
          // publicPath: "/webpack_4_practice/dist/image"
        }
      },
      {
        test: /\.ico$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./template.html",
      favicon: "./favicon.ico"
    })
  ]
};
