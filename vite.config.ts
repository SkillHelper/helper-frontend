import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@swc/plugin-styled-components", {}]],
    }),
  ],
  server: {
    port: 8080,
  },
});
