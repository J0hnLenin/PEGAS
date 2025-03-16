import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../App.vue'),
    },
  ],
})

export default router
