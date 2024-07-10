const path = require("path");

module.exports = {
  entry: "./src/index.js", // Adjust this path if your entry point file is different
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // Set mode to 'development' or 'production'
};
