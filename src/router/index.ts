import { createRouter, createWebHistory } from 'vue-router'
import listIcons from '../views/Icons.vue'
import Tabs from '@/views/Tabs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/list-icons',
      name: 'list.icons',
      component: listIcons
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    },
  ],
})

export default router
