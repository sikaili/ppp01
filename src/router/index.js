import { createRouter, createWebHistory } from 'vue-router';
import TheHeaderComponent from '@/components/TheHeader.vue';
import TheGalleryComponent from '@/components/TheGallery.vue';

import Program from '@/views/Program.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/paysage',
      components: {
        header: TheHeaderComponent,
        default: TheGalleryComponent,
      },
      alias: ['/', '/index.html', '/index.htm', '/404'],

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
