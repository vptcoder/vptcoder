import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import v1Home from '../components/Home.vue'
import v1Photography from '../components/Photography.vue'

const routes = [
	{
		path: '/', 
		component: v1Home
	},
	{
		path: '/shoot', 
		component: v1Photography
	},

]


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
	linkExactActiveClass: "exact-active"

})

export default router
