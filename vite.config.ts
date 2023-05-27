import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'kagura',
      fileName: 'index',
    },
    target: 'esnext',
    outDir: resolve(__dirname, 'dist'),
  },
  root: "./playground",
  rollupOptions: {
    external: ['pixijs'],
    output: {
      globals: {
        pixijs: 'PIXI',
      },
    },
  },
})
