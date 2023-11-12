import { createRouter, createWebHistory, RouterView } from 'vue-router'
import App from '@/App.vue'
import Tr from '@/i18n/translation'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/fr'
    },
    {
      path: '/:locale?',
      component: RouterView,
      children: [
        {
          path: '',
          name: 'home',
          beforeEnter: Tr.routeMiddleware,
          component: App
        }
      ]
    }
  ]
})

export default router
