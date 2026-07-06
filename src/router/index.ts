import { createWebHistory, createRouter } from 'vue-router'

import GuestView from '../views/GuestView.vue';
import Dashboard from '../components/Dashboard.vue';
import Authentication from '../components/Authentication.vue';
import UserView from '../views/UserView.vue';
import AuthenticationView from '../views/AuthenticationView.vue';
import Transactions from '../components/Transactions.vue';
import Payments from '../components/Payments.vue';
import Wishlists from '../components/Wishlists.vue';
import Funds from '../components/Funds.vue';
import Settings from '../components/Settings.vue';

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
			{
				path: 'transactions',
				name: 'Transactions',
				component: Transactions
			},	
			{
				path: 'payments',
				name: 'Payments',
				component: Payments
			},		
			{
				path: 'wishlists',
				name: 'Wishlist',
				component: Wishlists
			},		
			{
				path: 'funds',
				name: 'Funds',
				component: Funds
			},		
			{
				path: 'settings',
				name: 'Settings',
				component: Settings
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