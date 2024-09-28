import { createRouter, createWebHistory } from 'vue-router'
//创建router实例对象和创建history模式的路由

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component:Login
    },
    {
      path: '/',
      component:Layout
    }
  ]
})

export default router
