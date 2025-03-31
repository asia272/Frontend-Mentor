import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-projects/react-solutions/", 
  build: {
    outDir: "dist"
  }
});
