import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/login";
import register from "../components/register"
import forgotpassword from "../components/forgotpassword"
import resetpassword from "../components/resetpassword"
import dashboard from "../components/dashboard"
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(VueMaterial)
Vue.use(VueRouter)


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
    path: "/resetpassword",
    name: "resetpassword",
    component: resetpassword
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard
  }


  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
