import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-projects/junior/browser-extension-manger/',
  plugins: [react()],

})
