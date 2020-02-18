import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;
export const EventBus = new Vue();
export const normal = new Vue();


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
