import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/bundle.umd.js',
        format: 'umd',
        name: 'tinykit',
      },
      {
        file: 'dist/bundle.umd.min.js',
        sourcemap: true,
        format: 'umd',
        name: 'tinykit',
        plugins: [terser()],
      },
    ],
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
  },
];
