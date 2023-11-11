import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path";
import UnoCSS from 'unocss/vite'
import AutoImport from "unplugin-auto-import/vite"
import { visualizer } from "rollup-plugin-visualizer"
import VueDevTools from 'vite-plugin-vue-devtools'
import viteConsoleDropPlugin from "./vite-plugin/viteConsoleDrop";
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from "vite-plugin-html"
import viteCompression from 'vite-plugin-compression'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [
    viteConsoleDropPlugin(),
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
    createHtmlPlugin({
      inject: {
        data: {
          title: "Simple Life gmc & xtt"
        }
      }
    }),
    viteCompression(),
    // importToCDN({
    //   modules: [
    //     {
    //       name: 'vue',
    //       var: "Vue",
    //       path: "https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js"
    //     },
    //     {
    //       name: "vue-demi",
    //       var: "VueDemi",
    //       path: "https://cdn.jsdelivr.net/npm/vue-demi@0.14.5/lib/index.iife.min.js"
    //     },
    //     {
    //       name: "vue-router",
    //       var: "VueRouter",
    //       path: "https://cdn.jsdelivr.net/npm/vue-router@4.2.4/dist/vue-router.global.min.js"
    //     },
    //     {
    //       name: "element-plus",
    //       var: "ElementPlus",
    //       path: "https://cdn.jsdelivr.net/npm/element-plus@2.3.8/dist/index.full.min.js"
    //     },
    //     {
    //       name: "@element-plus/icons-vue",
    //       var: "ElementPlusIconsVue",
    //       path: "https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2.1.0/dist/index.iife.min.js"
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      "@": resolve("src")
    },
  },
  envPrefix: 'SL_',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  server: {
    open: true,
    port: 5173,
    host: '0.0.0.0',
    proxy: {
      '/hello': {
        target: "http://8.136.84.136:8888",
        changeOrigin: true
      },
      "/user": {
        target: "http://8.136.84.136:8888",
        changeOrigin: true
      },

      "/photo": {
        target: "http://8.136.84.136:8888",
        changeOrigin: true
      },

      "/music": {
        target: "http://8.136.84.136:8888",
        changeOrigin: true
      },

      "/article": {
        target: "http://8.136.84.136:8888",
        changeOrigin: true
      },

      "/video": {
        target: "http://8.136.84.136:8888",
        changeOrigin: true
      },

      '/plan': {
        target: "http://8.136.84.136:8888",
        changeOrigin: true
      }
    }
  }
})