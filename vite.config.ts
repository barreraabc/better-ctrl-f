// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    hmr: {
      host: 'localhost', // Ensure this matches where your client tries to connect
      port: 5173,      // Default Vite dev server port, adjust if different
      clientPort: 5173, // Use this if the client sees a different port for HMR
    },
  },
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, './src/popup/hooks'),
      '@context': path.resolve(__dirname, './src/popup/context'),
      '@utils': path.resolve(__dirname, './src/popup/utils'),
    },
  },
});
