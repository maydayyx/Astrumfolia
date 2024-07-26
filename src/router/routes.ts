import { Component } from "vue";

const routes = [
	{
		path: "/",
		component: () => import("@/layout/index.vue"),
        redirect: "/home",
		children: [
			{
				path: "/home",
				name: "home",
				component: () => import("@/pages/Home/index.vue"),
			},
			{
				path:'/user/:username',
				name:'user',
				component: () => import("@/pages/User/index.vue")
			},
			
		],
	},
	{
		path:"/:pathMatch(.*)",
		name:"404",
		component: () => import("@/pages/404/index.vue")
	}
];

export default routes;
