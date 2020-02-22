import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/login";
import register from "../components/register";
import forgotpassword from "../components/forgotpassword";
import archive from "../components/archieve";
import dashboard from "../components/dashboard";
import note from "../components/note";
import trash from "../components/trash";
import questions from "../components/Questions";

import serviceRegister from "../components/serviceRegister";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueMaterial from "vue-material";
import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {}); // config is optional. more below
Vue.use(require("vue-moment"));

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register,
    beforeEnter: (to, from, next) => {
      if (
        localStorage.getItem("token") === null ||
        localStorage.getItem("token") === undefined ||
        localStorage.getItem("token") === ""
      ) {
        next("/serviceRegister");
      } else {
        next(true);
      }
    }
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
    beforeEnter: (to, from, next) => {
      if (
        localStorage.getItem("token") === null ||
        localStorage.getItem("token") === undefined ||
        localStorage.getItem("token") === ""
      ) {
        next("/");
      } else {
        next(true);
      }
    },

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
      },
      {
        path: "trash",
        component: trash
      },
      {
        path: "questions/:noteid",
        component: questions
      }
    ]
  },
  {
    path: "/serviceRegister",
    name: "serviceRegister",
    component: serviceRegister
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
