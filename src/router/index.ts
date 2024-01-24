// history模式
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 路由的默认路径
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/recommend",
    component: () => import("../pages/Recommend.vue"),
  },
];

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;
