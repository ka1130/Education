module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // browser settngs
        },
        useBuiltIns: "usage"
        // controls polyfill
      }
    ]
  ]
};
