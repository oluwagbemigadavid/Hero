import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

// https://vitejs.dev/config/
export default ({
  plugins: [
    react(),
    glsl()
  ],
  root: 'src/',
  publidDir: "../public/",
  base: './',
  server: {
    host: true,
    open: !isCodeSandbox
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  }
})
