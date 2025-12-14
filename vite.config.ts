import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Shopify requires a single JS bundle (no chunks, no dynamic imports)
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: "react-homepage.js",
        assetFileNames: "react-style.css",
      },
    },
  },
}));
