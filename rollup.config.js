import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';
import { babel } from '@rollup/plugin-babel';

const packageJson = require('./package.json');

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        // Delete dist folder.
        del({ targets: 'dist/*' }),

        svgr(),

        // This plugin avoids us from bundling the peerDependencies. (React)
        peerDepsExternal({ includeDependencies: true }),

        // This plugin includes the third-party external dependencies into our final bundle.
        nodeResolve({ extensions: EXTENSIONS }),

        // Enables the conversion to CJS.
        commonjs(),

        // Three shaking for React.
        babel({
            babelHelpers: 'runtime',
            extensions: EXTENSIONS,
            exclude: /node_modules/
        }),

        // Generate (!only) type declaration files.
        typescript(),
        postcss({
            minimize: true,
            modules: true,
            extract: true,
        })
    ],
    external: [
        'react',
        'react-dom',
        'tailwindcss',
        'tr46',
        'encoding',
        'node-fetch',
        '@babel/runtime'
    ]
};
