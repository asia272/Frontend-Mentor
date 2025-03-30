import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", 
  publicDir: "public",
  build: {
    outDir: "dist"
  },
  resolve: {
    alias: {
      "@static": resolve(__dirname, "public/static_projects") 
    }
  }
});
