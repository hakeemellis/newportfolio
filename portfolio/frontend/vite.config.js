// https://vitejs.dev/config/

// Congiguration for Vite
export default defineConfig({
  plugins: [vue()], // Vue plugin
  // Server configuration
  server: {
    port: parseInt(process.env.VITE_PORT), // Port for frontend
    host: '0.0.0.0', // To allow network access
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL, // Backend URL
        changeOrigin: true, // To allow network access to backend through CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Regex to remove '/api' prefix
      },
    },
  },
});
