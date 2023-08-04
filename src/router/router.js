import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import wHome from "../components/w-home";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: wHome,
    },
  ],
});

export default router;

const app = createApp({});
app.use(router);
