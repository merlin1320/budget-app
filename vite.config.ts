/// <reference types="vitest/config" />
/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], 
  test: {
    globals:true,
    coverage: {
      enabled: true,
      exclude:['src/main.tsx'],
      include:['src/**']
    },
    environment:'jsdom',
  }
})
