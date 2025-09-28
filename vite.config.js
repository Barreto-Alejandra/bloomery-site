import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/bloomery-site/' : '/',
  plugins: [react()],
  build: { outDir: 'docs', emptyOutDir: true }
}))