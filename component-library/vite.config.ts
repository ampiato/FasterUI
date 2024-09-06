import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import pkg from './package.json' with { type: 'json' };
import process from 'process';

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
  ],
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['umd'], // or 'iife'
      fileName: (format) => `fasterui.${format}.js`,
      name: "fasterui"
    },
    rollupOptions: {
      // external: [...Object.keys(pkg.dependencies || {})],
      // external: ['react', 'react-dom'],
      // output: {
      //   globals: {
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //   },
      // },
    },
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});