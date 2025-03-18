import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../App.vue'
import DocumentApplicationVue from '../DocumentApplication.vue'

// Это пример кода, потом переделаем
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppView,
    },
    {
      path: '/application',
      name: 'application',
      component: DocumentApplicationVue,
    },
  ],
})

export default router
