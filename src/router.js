import { createRouter, createWebHistory } from "vue-router";
import Main from "./views/Main.vue";

// const Hi = { template: "<div>hi</div>" };
const Foo = { template: "<div>foo</div>" };

const routes = [
  {
    path: "/",
    component: Main,
  },
  { path: "/foo", component: Foo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
