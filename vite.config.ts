import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'kagura',
      fileName: 'index',
      formats: ['es','cjs','umd','iife'],
    },
    target: 'esnext',
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      external: ['pixi.js',"react"],
      output: {
        globals: {
          'pixi.js': 'PIXI',
        },
      },
    },
  },
  root: "./playground",
})
