import { createRouter, createWebHistory } from "vue-router";
import { emitter } from "@/utils";
import routes from "./routes";

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const globalVistiteRoutes = new Set();

router.beforeEach((to, _, next) => {
	if (!globalVistiteRoutes.has(to.path)) {
		emitter.emit("loading", true);
	}
	next();
});

router.afterEach((to, _) => {
	globalVistiteRoutes.add(to.path);
	emitter.emit("loading", false);
});
export default router;
