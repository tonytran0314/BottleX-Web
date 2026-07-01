import { createWebHistory, createRouter } from 'vue-router'

import GuestView from '../views/GuestView.vue';
import Dashboard from '../components/Dashboard.vue';
import Authentication from '../components/Authentication.vue';
import UserView from '../views/UserView.vue';
import AuthenticationView from '../views/AuthenticationView.vue';

const routes = [
	{ 
		path: '/', 
		component: GuestView,
		name: "Guest View",
	},
	{
		path: '/user',
		component: UserView,
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: Dashboard
			},	
		]
	},
	{
		path: '/login',
		component: AuthenticationView,
		name: "Authentication View"
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})