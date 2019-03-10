const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    myEntry: "./src/index.js"
    // the above alias will be used to name bundled files
  },
  mode: "development",
  devtool: "inline-source-map",
  // should be source-map under production mode
  devServer: {
    contentBase: "./dist",
    // path of the output directory
    port: 3030,
    hot: true
  },
  output: {
    filename: "[name].bundle.[hash].js",
    /* we use [] here, because our entry will be multiple files
      if there's only one entry file, 'bundle.js' would be enough
      hash is optional and generated automatially, it can also be
      filename: "[name].bundle.js" */
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/proj/dist/"
    /* note the / at the end as opposed to publicPath in the loader rule
    publicPath here will be used by htmlWebpackPlugin */
    publicPath: "/test" // used by webpack-dev-server -> this will be in the url in the browser
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "myPrefix.[name].[ext]",
          // ^ controls the name of the bundled image file
          outputPath: "images/",
          // ^ if we want, we can specify child directory for keeping images
          publicPath: "./images/" //for webpack-dev-server
          // publicPath: "/proj/dist/images"
          // the above will override the publicPath in the output - we can chose either, no sense to keep both
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "html webpack plugin",
      filename: "myIndex.html",
      template: "index.html"
    })
  ]
};
