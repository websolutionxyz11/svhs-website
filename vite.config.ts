import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
  // Build optimizations
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'framer-motion',
            '@tanstack/react-query',
            '@tanstack/react-router'
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
  // Compression handled by deployment platform (Vercel). Do not add build-time compression here to avoid
  // adding native dependencies; Vercel serves compressed assets automatically.
});