import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Assure-toi que l'output est bien défini
    sourcemap: false, // Désactive les sourcemaps pour éviter des erreurs de taille
  }
})
