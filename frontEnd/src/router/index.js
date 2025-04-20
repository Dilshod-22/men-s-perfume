import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/mainView.vue';
import Karzinka from '../views/karzinka.vue';
import shoppingCart from "../views/shoppingCart/shoppingCart.vue"
import createProduct from "../views/createProduct/createProduct.vue";
import DashKT from "../views/dashboard/adminDashboard.vue";
import productList from "../components/productList.vue";
import chartVue from '../views/chartVue.vue';
import profile from '../views/Profile/profile.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/home', name: 'Home', component: Home },
  { path: '/profile', name: 'profile', component: profile },
  // { path: '/DashKT', name: 'AdminDashboard', component: DashKT },
  { path: '/ShoppingCart', name: 'ShoppingCart', component: shoppingCart },
  { path: '/product/:id', name: 'Karzinka', component: Karzinka },
  { path: '/homeX', name: 'chartVue', component: chartVue },
  { path: '/createProduct', name: 'CreateProduct', component: createProduct },
  { path: '/admin/productList', name: 'productList', component: productList }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;