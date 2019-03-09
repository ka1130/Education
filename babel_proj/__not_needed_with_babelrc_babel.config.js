module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1"
        },
        useBuiltIns: "usage"
        // controls polyfill
      }
    ]
  ]
};

// in the real life just copy the babel config file provided by babel manual
// https://babeljs.io/docs/en/usage
