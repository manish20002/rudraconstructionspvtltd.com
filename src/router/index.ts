import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutUsPage from '../pages/AboutUsPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsPage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, left: 0, behavior: 'smooth' }
  },
})

export default router
