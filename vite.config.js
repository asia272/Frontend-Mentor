import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // Keep base as root
  build: {
    outDir: "dist",
    assetsDir: "assets" // Keeps built assets organized
  },
  resolve: {
    alias: {
      "@static": resolve(__dirname, "public/static-projects") 
    }
  },
  publicDir: "public" 
});
