import { readdirSync, statSync } from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const bundles = [
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

const createBundle = (func) => {
  const inputF = './src/' + func + '.js';
  const outputF = 'dist/x/' + func;
  return {
    input: inputF,
    output: [
      { file: outputF + '.js', format: 'iife', name: func },
      {
        file: outputF + '.min.js',
        name: func,
        format: 'iife',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
  };
};

const ignoreList = [];
const singles = [];

readdirSync('./src').forEach((f) => {
  if (!f.endsWith('.js')) return;
  if (f.endsWith('.test.js')) return;
  const fullname = __dirname + '/src/' + f;
  if (statSync(fullname).isDirectory()) return;
  const filename = f.split('.js')[0];
  if (ignoreList.includes(filename)) return;
  singles.push(filename);
});

for (const f of singles) {
  if (!f) continue;
  // @ts-ignore
  bundles.push(createBundle(f));
}

export default bundles;
