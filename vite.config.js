import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/landing-page/',
  // base:'', # change to any on production.
  plugins: [react()],
  server: {
    open: '/landing-page/'
  },
})
