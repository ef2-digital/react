const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-apollo-client',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    importLoaders: 1
                },
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            components: path.resolve(__dirname, '../src/components'),
            theme: path.resolve(__dirname, '../src/theme')
        };
        return config;
    },
    framework: '@storybook/react'
};
