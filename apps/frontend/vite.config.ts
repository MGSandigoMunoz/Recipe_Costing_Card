import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy configuration for API requests
    proxy:{
      '/api':{
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
