import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import WindiCSS from "vite-plugin-windicss";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
  root: "src",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: [
        resolve(__dirname, "src/index.html"),
        resolve(__dirname, "src/cv/index.html"),
        resolve(__dirname, "src/cv/edu.html"),
        resolve(__dirname, "src/wx/index.html"),
      ],
    },
  },
});
