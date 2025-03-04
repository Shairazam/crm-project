import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
  ],
})
