import { createApp } from "vue";
import { createPinia } from "pinia";
import "tailwindcss/tailwind.css";
import "normalize.css";
import router from "@/router/index";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router)

app.mount("#app");
