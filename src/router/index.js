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
      import(/* webpackChunkName: "CView" */ "../views/CView.vue"),
  },
  {
    path: "/ts",
    name: "typescript",
    component: () =>
      import(
        /* webpackChunkName: "TypescriptView" */ "../views/TypescriptView.vue"
      ),
  },
  {
    path: "/py",
    name: "python",
    component: () =>
      import(/* webpackChunkName: "PythonView"" */ "../views/PythonView.vue"),
  },
  {
    path: "/rs",
    name: "rust",
    component: () =>
      import(/* webpackChunkName: "RustView" */ "../views/RustView.vue"),
  },
  {
    path: "/todos",
    name: "todos",
    component: () =>
      import(/* webpackChunkName: "TodosView" */ "../views/TodosView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
