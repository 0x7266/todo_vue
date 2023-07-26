import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			name: "home",
			path: "/",
			component: Home,
		},
		{
			name: "about",
			path: "/about",
			component: import("../pages/About.vue"),
		},
	],
});

export default router;
