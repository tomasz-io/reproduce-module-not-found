const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  resolve: {
    extensions: [".js"],
    modules: ["src", "node_modules"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
};
