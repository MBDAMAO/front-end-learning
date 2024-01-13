// history模式
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";

const routes = [
  // 路由的默认路径
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
];

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;
