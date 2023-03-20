import { createRouter, createWebHistory } from "vue-router";
import Main from "./views/Main.vue";
import General from "./views/General.vue";
import Personal from "./views/Personal.vue";
import Car from "./views/Car.vue";
import Estate from "./views/Estate.vue";
import Rent from "./views/Rent.vue";
import Credit from "./views/Credit.vue";

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
  { path: "/estate", component: Estate },
  { path: "/rent", component: Rent },
  { path: "/credit", component: Credit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
