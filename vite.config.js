import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
//element 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      
      resolvers: [ElementPlusResolver()],
    }),// 1. 配置elementPlus采用sass样式配色系统
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))//实际转化路径
    }
  },
    css: {
        preprocessorOptions: {
            scss: {
                // 2. 自动导入定制化样式文件进行样式覆盖
                additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
            }
        }
    }
})
