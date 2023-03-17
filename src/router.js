import { createRouter, createWebHistory } from "vue-router";
import Main from "./views/Main.vue";
import General from "./views/General.vue";
import Personal from "./views/Personal.vue";
import Car from "./views/Car.vue";

// const Hi = { template: "<div>hi</div>" };
const Foo = { template: "<div>foo</div>" };

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/gen",
    component: General,
  },
  { path: "/per", component: Personal },
  { path: "/car", component: Car },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
