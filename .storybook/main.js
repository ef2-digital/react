const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-docs',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
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
    core: {
        builder: {
            name: 'webpack5'
        }
    },
    webpackFinal: async (config) => {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/,
            enforce: 'pre',
            loader: require.resolve('@svgr/webpack')
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            components: path.resolve(__dirname, '../src/components'),
            theme: path.resolve(__dirname, '../src/theme')
        };

        return config;
    },
    framework: '@storybook/react'
};
