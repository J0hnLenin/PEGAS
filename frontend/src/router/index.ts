import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/App.vue'
import DocumentApplicationVue from '../views/DocumentApplication.vue'
import DocumentApplicationsVue from '../views/DocumentApplications.vue'
import DocumentStudentApplications from '../views/DocumentStudentApplications.vue'
import ApplicationsBackend from "../views/ApplicationsBackend.vue"

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
    {
      path: '/my-applications',
      name: 'student-applications',
      component: DocumentStudentApplications,
    },
    {
      path: '/applications-backend',
      name: 'applications-backend',
      component: ApplicationsBackend,
    },
  ],
})

export default router
