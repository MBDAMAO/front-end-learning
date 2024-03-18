import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
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
  {
    path: "/test",
    component: () => import("../components/VideoWindow/index.vue"),
  },
  {
    path: "/user",
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

export default router;
