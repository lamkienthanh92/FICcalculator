import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" giúp app chạy được trên GitHub Pages ở bất kỳ tên repo nào
export default defineConfig({
  plugins: [react()],
  base: "./",
});
