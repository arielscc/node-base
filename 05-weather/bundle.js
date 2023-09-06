const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  outfile: 'bin/weather.js',
  bundle: true,
  tsconfig: './tsconfig.json',
  platform: 'node',
  format: 'cjs',
  banner: { js: '#!/usr/bin/env node' },
  minify: true,
}).catch(() => process.exit(1));
