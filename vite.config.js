import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// lean-landing：純前端一頁式官網（免費鉤子）。零後端——不 proxy /api、不碰 Django。
// 部署＝CF Pages（vite build → dist）。想收名單/管客人＝畢業到 lean-stack 全端（走 graduate skill）。
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: {
    port: Number(process.env.PORT) || 5175,
  },
})
