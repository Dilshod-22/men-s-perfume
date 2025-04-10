import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/mainView.vue';
import Karzinka from '../views/karzinka.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/karzinka', name: 'Karzinka', component: Karzinka },
  { path: '3', name: 'Karzinka', component: Karzinka }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;