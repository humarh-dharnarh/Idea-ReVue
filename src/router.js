import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Auth from "./views/Auth.vue";
import MyIdeas from "./views/MyIdeas.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/Auth",
      name: "Auth",
      component: Auth,
    },
    {
      path: "/MyIdeas",
      name: "MyIdeas",
      component: MyIdeas,
      meta: {
        requiresAuth: true
      }
    },
  ]
});
