import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/admin-dashboard/",
  build: {
    outDir: "build",
  },
  plugins: [nodePolyfills(), react()],
});
