import { createRouter, createWebHistory } from 'vue-router';
import Panorama from '@/views/Panorama.vue';
import Paysage from '@/views/Paysage.vue';
import Program from '@/views/Program.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Paysage,
      alias: ['/paysage', '/index.html', '/index.htm'],

    },
    {
      path: '/panorama',
      component: Panorama,
    },
    {
      path: '/program',
      component: Program,
    },
  ],
});

export default router;
