import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ← ИЗМЕНИТЕ НА ОТНОСИТЕЛЬНЫЙ ПУТЬ
  build: {
    outDir: 'dist',
    assetsDir: '.', // ← Файлы будут в корне, а не в assets/
  }
})