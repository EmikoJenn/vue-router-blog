import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/c",
    name: "c-lang",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CView.vue"),
  },
  {
    path: "/ts",
    name: "typescript",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TSView.vue"),
  },
  {
    path: "/py",
    name: "python",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PYView.vue"),
  },
  {
    path: "/rs",
    name: "rust",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RSView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
