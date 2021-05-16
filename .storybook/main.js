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
};
