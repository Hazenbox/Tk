import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Check if we're building for GitHub Pages or custom domain
// Set by GitHub Actions in our workflow
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Use root path for custom domain, /Tk/ for GitHub Pages
  base: isCustomDomain ? "/" : "/Tk/", 
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
