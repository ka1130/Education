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
    minimizer: [
      // we now need to handle minimazion by ourselves now with the use of UglifyJS
      // new UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/mycss.[name].css"
      // controls the name and location of the bundled css file
    })
  ]
});
