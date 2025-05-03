import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-projects/newbie/faq-accordion/',
  plugins: [react()],
})
