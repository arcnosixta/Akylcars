import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Akylcars/', // 👈 добавь это!
  plugins: [react()],
})
