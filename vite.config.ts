import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },
});
