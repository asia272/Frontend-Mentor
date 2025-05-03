import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-projects/intermediate/e-commerce-product-page/',
  plugins: [react()],
})
