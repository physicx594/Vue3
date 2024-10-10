import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/index.vue'
import { RouterName } from '@/enums/router.enum'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouterName.Home,
      component: HomeView
    },
    {
      path: '/products',
      name: RouterName.Products,
      component: () => import('@/views/ProductsView/index.vue')
    },
    {
      path: '/product/:id',
      name: RouterName.Product,
      component: () => import('@/views/ProductView/index.vue')
    },
    {
      path: '/about',
      name: RouterName.About,
      component: () => import('@/views/AboutView/index.vue')
    }
  ]
})

export default router
