import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home/:filter',
      name: 'home-filtered',
      component: () => import('../components/CardView.vue')
    },
    {
      path: '/detail/:key',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardDetail.vue')
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('../views/SubmitView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../views/Archive.vue')
    }


  ]
})

export default router
