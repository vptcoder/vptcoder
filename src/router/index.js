import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import v1Home from '../components/Home.vue'

const routes = [
	{
		path: '/', 
		component: v1Home
	},

]


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
	linkExactActiveClass: "exact-active"

})

export default router
