import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue','vue-router'],
      dts:'types/auto-imports.d.ts',
      dirs:['./src/components']
    }),
    Components({
      deep:true,
      dts:'types/components.d.ts',
      dirs:['./src/components']
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  resolve:{
    alias:{
      '@': '/src'
    }
  }
})