import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Dev server config
  server: {
    host: true,   // listen on all addresses (both IPv4 & IPv6)
    port: 8080,   // dev server port
  },

  // Plugins
  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],

  // Base path for GitHub Pages (repo name = portfolio)
  base: "/portfolio/",

  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
