// vite.config.js

// Configuration for Vite

// Import Application Modules
import { defineConfig, loadEnv } from 'vite'; // Import Vite configuration and environment loader
import vue from '@vitejs/plugin-vue'; // Import Vue plugin for Vite
import { VitePWA } from 'vite-plugin-pwa';

// Define Vite configuration function 
export default defineConfig(({ mode }) => {
  // Load the environment variables based on the mode (staging, production, development, etc.)
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    // Vite configuration
    plugins: [
      vue(),
      VitePWA({
        registerType: 'autoUpdate', // Automatically update the service worker on every successful build
        //includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'], 
        manifest: {
          name: env.VITE_APP_NAME,
          short_name: 'Portfolio',
          description: env.VITE_APP_DESCRIPTION,
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
    ],
    // Environment variables
    server: {
      // Frontend configuration
      port: parseInt(env.VITE_PORT),
      host: '0.0.0.0', // Allow network access
      // Backend configuration
      proxy: {
        '/api': {
          // Backend URL
          target: env.VITE_API_BASE_URL,
          // Allow cross-origin requests
          changeOrigin: true,
          // Remove '/api' from the path
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
