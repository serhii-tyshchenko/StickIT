import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      store: '/src/store',
      components: '/src/components',
      utils: '/src/utils',
      hooks: '/src/hooks',
      localization: '/src/localization',
      '~styles': '/src/styles',
      '~assets': '/src/assets',
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
