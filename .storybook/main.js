const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "storybook-dark-mode",
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
    ],
  }),
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      "@components": path.resolve(__dirname, "../src", "components"),
      "@themes": path.resolve(__dirname, "../src", "themes"),
      "@systems": path.resolve(__dirname, "../src", "systems"),
      "@utils": path.resolve(__dirname, "../src", "utils"),
    };

    return config;
  },
};
