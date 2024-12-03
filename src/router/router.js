import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";

import wMain from "../components/w-main-content";
import wHome from "../components/w-home";
import store from "../vuex/store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: wHome,
    },
    {
      path: "/main",
      name: "main",
      component: wMain,
      beforeEnter: async (to, from, next) => {
        try {
          await store.dispatch("fetchUser");
          next();
        } catch (error) {
          next({ name: "home" });
        }
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (token && to.name === "home") {
    next({ name: "main" });
  } else {
    next();
  }
});

export default router;

const app = createApp({});
app.use(router);
