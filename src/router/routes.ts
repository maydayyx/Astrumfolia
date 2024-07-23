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
		],
	},
];

export default routes;
