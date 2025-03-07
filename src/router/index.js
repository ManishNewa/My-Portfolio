import { createRouter, createWebHistory } from 'vue-router'

import DefaultTemplate from '@/views/DefaultTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultTemplate,
    },
  ],
})

export default router
