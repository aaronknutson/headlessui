import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dropdown from "../views/Dropdown.vue";
import Dialog from "../views/Dialog.vue";
import RadioGroup from "../views/RadioGroup.vue";
import Tabs from "../views/Tabs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dropdown",
    name: "dropdown",
    component: Dropdown,
  },
  {
    path: "/dialog",
    name: "dialog",
    component: Dialog,
  },
  {
    path: "/radio",
    name: "radio",
    component: RadioGroup,
  },
  {
    path: "/tabs",
    name: "tabs",
    component: Tabs,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
