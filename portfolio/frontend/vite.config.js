import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  // Load the environment variables based on the mode (staging, production, development, etc.)
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    // Vite configuration
    plugins: [vue()],
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
