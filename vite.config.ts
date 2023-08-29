import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      $src: resolve('./src'),
      $assets: resolve('./src/assets'),
      $containers: resolve('./src/containers'),
      $components: resolve('./src/components'),
      $pages: resolve('./src/pages'),
      $stores: resolve('./src/stores'),
      $types: resolve('./src/types'),
      $api: resolve('./src/api'),
    }
  },
})
