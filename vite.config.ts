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
    target: 'ES2022',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-animation';
            if (id.includes('@radix-ui')) return 'vendor-ui';
            if (id.includes('@tanstack')) return 'vendor-tanstack';
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }
        },
      },
    },
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@tanstack/react-router', '@tanstack/react-query'],
    exclude: ['ogl'],
  },
  // Performance hints
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  // Compression handled by deployment platform (Vercel). Do not add build-time compression here to avoid
  // adding native dependencies; Vercel serves compressed assets automatically.
});