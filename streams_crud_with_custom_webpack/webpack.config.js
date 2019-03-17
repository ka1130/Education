const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    myEntry: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.join(__dirname, "src/"), "node_modules/"]
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
