import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Mono", "monospace"],
      },
      colors: {
        terminalbg: "#23272f",
        terminaltext: "#8de995",
        accent: "#61dafb",
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
