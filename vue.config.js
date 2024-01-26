const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// const path = require("path");
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "src"),
//       },
//     },
//   },
// };
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
// module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set("@", resolve("src"))
//       .set("assets", resolve("src/assets"))
//       .set("components", resolve("src/components"))
//       .set("base", resolve("baseConfig"))
//       .set("public", resolve("public"));
//   },
// };
