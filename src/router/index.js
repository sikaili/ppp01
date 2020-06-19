import { createRouter, createWebHistory } from 'vue-router';
import TheHeaderComponent from '@/components/TheHeader.vue';
import TheGalleryComponent from '@/components/TheGallery.vue';

import Panorama from '@/views/Panorama.vue';
import Paysage from '@/views/Paysage.vue';
import Program from '@/views/Program.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      components: {
        header: TheHeaderComponent,
        default: TheGalleryComponent,
      },
      alias: ['/paysage', '/index.html', '/index.htm'],

    },
    {
      path: '/panorama',
      components: {
        header: TheHeaderComponent,
        default: TheGalleryComponent,
      },
    },
    {
      name: 'program',
      path: '/program/:articleId?',
      components: {
        default: Program,
        header: TheHeaderComponent,
      },
    },
  ],
});

export default router;
