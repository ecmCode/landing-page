import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/react-vite-tailwind-boilerplate/',
  // base:'', # change to any on production.
  plugins: [react()],
  server: {
    open: '/react-vite-tailwind-boilerplate/'
  },
})
