import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'kagura',
      fileName: 'index',
    },
    target: 'esnext',
  },
  root: "./playground",
})
