
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: 'all',
    hmr: {
      clientPort: 443
    },
    origin: 'https://5e285479-e0e7-4298-85b8-27b3f8de8ddc-00-1gzyr8xgkxm9m.kirk.replit.dev'
  }
})
