import { createWebHashHistory, createRouter } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('$pages/Frontend/Home.vue') },
  ],
});

export default router
