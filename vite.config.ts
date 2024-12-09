import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Distance-Visibility-Calculator/',
  plugins: [react(), ghPages()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
