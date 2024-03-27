import { defineConfig } from 'vite'
import commonjs from '@rollup/plugin-commonjs';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjs({
      include: /node_modules/ // Only transpile CommonJS modules from node_modules
    }),
  ],
})

