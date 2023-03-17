// 자동으로 만들어지는거였나???

import { createApp } from "vue/dist/vue.esm-bundler.js";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
