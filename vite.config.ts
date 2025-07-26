import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy for Maskawa Sub API
      "/api/maskawa": {
        target: "https://maskawasubapi.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/maskawa/, "/api"),
      },
      // Proxy for SmartSpeedData API
      "/api/smartspeed": {
        target: "https://smartspeedtelecom.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/smartspeed/, "/api"),
      },
    },
  },
});