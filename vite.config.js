import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bloomery-site/',
  plugins: [react()],
  build: { outDir: 'docs', emptyOutDir: true }
})