import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index.ts";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 创建pinia
const pinia = createPinia();
// 创建app
const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount("#app");
// 安装pinia
app.use(pinia);
