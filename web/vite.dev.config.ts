import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path";
import UnoCSS from 'unocss/vite'
import AutoImport from "unplugin-auto-import/vite"
import { visualizer } from "rollup-plugin-visualizer"
import VueDevTools from 'vite-plugin-vue-devtools'
import postcssPresetEnv from'postcss-preset-env'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from "vite-plugin-html"
import checker from 'vite-plugin-checker'

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    }),
    vueJsx(),
    UnoCSS(),
    visualizer({open: true}),
    VueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    checker({
      typescript: true
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Simple Life gmc & xtt"
        }
      }
    })
  ],
  base: './',
  clearScreen: false,
  envPrefix: 'SL_',
  resolve: {
    alias: {
      "@": resolve("src")
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]"
      },
    },
    target: 'es2015'
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        postcssPresetEnv,
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `$theme: #3fc7f5;`,
      }
    }
  },
  server: {
    open: true,
    port: 5173,
    host: '0.0.0.0',
    proxy: {
      '/hello': {
        target: "http://localhost:8888",
        changeOrigin: true
      },
      "/user": {
        target: "http://localhost:8888",
        changeOrigin: true
      },

      "/photo": {
        target: "http://localhost:8888",
        changeOrigin: true
      },

      "/music": {
        target: "http://localhost:8888",
        changeOrigin: true
      },

      "/article": {
        target: "http://localhost:8888",
        changeOrigin: true
      },

      "/video": {
        target: "http://localhost:8888",
        changeOrigin: true
      },

      '/plan': {
        target: "http://localhost:8888",
        changeOrigin: true
      }
    }
  }
})