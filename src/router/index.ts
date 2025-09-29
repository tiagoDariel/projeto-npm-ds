import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import listIcons from '../views/Icons.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/list-icons',
      name: 'list.icons',
      component: listIcons
    },
  ],
})

export default router
