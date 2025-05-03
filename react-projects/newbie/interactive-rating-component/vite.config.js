import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-projects/newbie/interactive-rating-component/',
  plugins: [react()],
})
