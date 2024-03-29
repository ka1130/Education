const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
      // to share common files, so as not to bundle i.e. jquery multiple times
      // handy if we have more than one entry points
    },
    minimizer: [
      // we now need to handle minimazion by ourselves now with the use of UglifyJS
      new OptimizeCssAssetsPlugin(),
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/mycss.[name].css"
      // controls the name and location of the bundled css file
    })
  ]
});
