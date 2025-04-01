import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Make sure the output folder is 'dist'
    rollupOptions: {
      input: './index.html', // Ensure that 'index.html' is the entry point
    },
  },
});
