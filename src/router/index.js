import { createRouter, createWebHistory } from 'vue-router'
//创建router实例对象和创建history模式的路由

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component:Login
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component:Home
        },
        {
          path: 'category/:id',
          component:Category
        },
        {
          path: 'category/subcategory/:id',
          component:SubCategory
        },
      ]
    }
  ],
  scrollBehavior() {//路由行为定制
    return {
      top:0,
    }
  }
})

export default router
