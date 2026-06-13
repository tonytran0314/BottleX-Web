import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue';
import Authentication from '../components/Authentication.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Authentication },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})