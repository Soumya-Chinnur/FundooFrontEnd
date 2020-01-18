import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/login";
import register from "../components/register";
import forgotpassword from "../components/forgotpassword";
import archive from "../components/archieve"
import dashboard from "../components/dashboard";
import note from "../components/note";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueMaterial from "vue-material";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: forgotpassword
  },
  
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,

    children: [
      {
        path: "/",
        redirect: "note",
        pathMatch: "full"
      },
      {
        path: "note",
        component: note
      },
      {
        path: "archive",
        component: archive
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
