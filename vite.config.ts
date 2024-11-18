import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '~/pub': resolve(__dirname, 'public')
    }
  },
  plugins: [react()],
})
