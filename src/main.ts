import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { useUserStore } from "./store/status";
const pinia = createPinia();

const app = createApp(App).use(pinia).use(router).use(ElementPlus);
const token = localStorage.getItem("token");

if (token) {
  // 如果存在 token，发送请求到服务器验证 token 并获取用户信息
  fetch("https://apifoxmock.com/m1/3898618-0-default/user/verify", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.valid) {
        console.log("login valid!!!");
        useUserStore().login();
        app.mount("#app");
      } else {
        console.log("login not valid!!!");
        localStorage.removeItem("token");
        app.mount("#app");
      }
    })
    .catch(() => {
      console.log("login check error!!!");
      localStorage.removeItem("token");
      app.mount("#app");
    });
} else {
  app.mount("#app");
  console.log("no token!!!");
}
