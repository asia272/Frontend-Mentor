import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", 
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  resolve: {
    alias: {
      "@static": resolve(__dirname, "public/static_projects") // ✅ Folder name static_projects hai
    }
  },
  publicDir: "public" // ✅ Ensure public directory is served correctly
});
