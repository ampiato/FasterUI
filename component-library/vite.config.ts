import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@gen', replacement: fileURLToPath(new URL('./src/gen', import.meta.url)) },
    ]
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }

})
