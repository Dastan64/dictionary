import NotFoundThumb from '@/components/NotFoundThumb/NotFoundThumb.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Search from '@/views/Search/Search.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search/:word',
    component: Search,
  },
  {
    path: '/404',
    component: NotFoundThumb,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
