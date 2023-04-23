import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/adminapi': 'http://localhost:3000/',
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
})
