import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        // The main benefit of shipping ES modules is that it makes your library tree-shakable. This is supported by tools like Rollup and webpack 2+.
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        svgr(),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json'
        }),
        postcss({
            extensions: ['.css']
        })
    ],
    external: [
        'react',
        'react-dom',
        'tailwindcss',
        'tr46',
        'encoding',
        'node-fetch',
        '@storybook/testing-library',
        '@storybook/react',
        '@storybook/manager-webpack5',
        '@storybook/builder-webpack5',
        '@storybook/addon-postcss',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ]
};
