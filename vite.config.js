import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-solutions/',  // Set this to the base path where your project is hosted on Vercel
});
