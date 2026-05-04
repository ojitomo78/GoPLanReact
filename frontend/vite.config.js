import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Esto ayuda a que los archivos se encuentren entre sí
  build: {
    outDir: 'dist', // Aquí le decimos a Vite que cree la carpeta 'dist'
  }
})