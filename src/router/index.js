import { createRouter, createWebHistory } from 'vue-router';
import Panorama from '@/views/Panorama.vue';
import Paysage from '@/views/Paysage.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Paysage,
    },
    {
      path: '/panorama',
      component: Panorama,
    },
  ],
});

export default router;
