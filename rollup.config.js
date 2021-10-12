import { readdirSync, statSync, writeFileSync } from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { basename, join } from 'path';

function readModules() {
  const ignoreList = [];
  const modList = [];

  readdirSync('./src').forEach((f) => {
    if (!f.endsWith('.js')) return;
    if (f.endsWith('.test.js')) return;

    const fullname = join(__dirname, 'src', f);
    if (statSync(fullname).isDirectory()) return;

    const funcName = basename(f, '.js');
    if (ignoreList.includes(funcName)) return;

    modList.push({
      path: fullname,
      func: funcName,
    });
  });

  return modList;
}

function createBundle(mod) {
  const inputF = mod.path;
  const outputF = 'dist/x/' + mod.func;
  return {
    input: inputF,
    output: [
      { file: outputF + '.js', format: 'iife', name: mod.func },
      {
        file: outputF + '.min.js',
        name: mod.func,
        format: 'iife',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
  };
}

function generateBundles() {
  const entryFile = './index.js';
  const modList = readModules();

  // generate entry file
  let indexJsContent = '// Auto generate by rollup.config.js';
  for (const mod of modList) {
    indexJsContent += `
export { default as ${mod.func} } from './src/${mod.func}';`;
  }

  writeFileSync(entryFile, indexJsContent);

  const bundles = [
    {
      input: entryFile,
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

  for (const mod of modList) {
    // @ts-ignore
    bundles.push(createBundle(mod));
  }

  return bundles;
}

export default generateBundles();
