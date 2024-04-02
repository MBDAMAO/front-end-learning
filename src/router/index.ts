import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/follow",
    name: "follow",
    component: () => import("../views/Follow/index.vue"),
  },
  {
    path: "/friend",
    name: "friend",
    component: () => import("../views/Friends/index.vue"),
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () => import("../views/Recommend/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../components/VideoWindow/index.vue"),
  },
  {
    path: "/live",
    name: "live",
    component: () => import("../views/Live/index.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/userPage/index.vue"),
    children: [
      {
        path: "post",
        component: () => import("../views/userPage/resources/posts/index.vue"),
      },
      {
        path: "like",
        component: () => import("../views/userPage/resources/like/index.vue"),
      },
      {
        path: "collection",
        component: () =>
          import("../views/userPage/resources/collection/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched[0].path) {
    localStorage.setItem("currentState", to.matched[0].path);
  }
  next();
});
export default router;
