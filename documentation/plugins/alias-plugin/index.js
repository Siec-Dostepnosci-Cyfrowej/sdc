const path = require("path");

module.exports = function aliasPlugin() {
  return {
    name: "alias-plugin",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../../src"),
          },
        },
      };
    },
  };
};
