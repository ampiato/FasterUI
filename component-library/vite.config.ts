import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {})],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});