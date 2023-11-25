// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ShopPage from '@/views/ShopPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import ContactPage from '@/views/ContactPage.vue';

import AdminDashboard from '@/admin/views/AdminDashboard.vue';
import UserManagement from '@/admin/views/UserManagement.vue';
import ProductManagement from '@/admin/views/ProductManagement.vue';
// Import other components as needed

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopPage,
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  // Add other routes here, for example:
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/components/AboutPage.vue')
  // }
  {
    path: '/admin',
    component: () => import('@/admin/AdminApp.vue'),
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'users', component: UserManagement },
      { path: 'products', component: ProductManagement },
      // ... other admin routes ...
    ],
    // Add route guards for authentication and authorization
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
