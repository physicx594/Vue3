import { createWebHashHistory, createRouter } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('$pages/Frontend/Home.vue') },
    { path: '/products', name: 'products', component: () => import('$pages/Frontend/Products.vue') },
    { path: '/product/:id', name: 'product', component: () => import('$pages/Frontend/Product.vue') },
    { path: '/about', name: 'about', component: () => import('$pages/Frontend/About.vue') },
  ],
});

export default router
