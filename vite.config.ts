import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/utils/_variables';`, // Example of global SCSS import
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
