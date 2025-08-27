import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/maisPraTi/Atividade5/api-movies/',
  plugins: [react()],
})
