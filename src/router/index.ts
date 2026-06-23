import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue';
import Authentication from '../components/Authentication.vue';
import Dashboard from '../components/Dashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Authentication },
  { path: '/dashboard', component: Dashboard },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})