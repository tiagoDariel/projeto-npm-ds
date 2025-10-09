import { createRouter, createWebHistory } from 'vue-router'
import listIcons from '../views/Icons.vue'
import Tabs from '@/views/Tabs.vue'
import Guide from '@/views/Guide.vue'
import Button from '@/views/Button.vue'
import Input from '@/views/Input.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'guide' }
    },
     {
      path: '/guia',
      name: 'guide',
      component: Guide
    },
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
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('@/views/Select.vue')
    },
  ],
})

export default router
