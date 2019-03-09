const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/proj/dist/"
    //note the / at the end as opposed to publicPath in the loader rule
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
          publicPath: "/proj/dist"
          // the above will override the publicPath in the output
        }
      }
    ]
  }
};
