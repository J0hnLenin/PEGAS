import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/App.vue'
import DocumentApplicationVue from '../views/DocumentApplication.vue'
import DocumentApplicationsVue from '../views/DocumentApplications.vue'

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
    {
      path: '/applications',
      name: 'applications',
      component: DocumentApplicationsVue,
    },
  ],
})

export default router
