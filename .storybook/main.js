module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: [
        require.resolve("babel-loader"),
        require.resolve("react-docgen-typescript-loader"),
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
