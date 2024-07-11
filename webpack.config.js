const path = require("path");

module.exports = {
  entry: "./src/main.ts", // Adjust this path if your entry point file is different
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // Set mode to 'development' or 'production'
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      // 新增的 vue-loader 规则
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
