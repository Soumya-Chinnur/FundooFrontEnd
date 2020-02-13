import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;
export const EventBus = new Vue();
export const normal = new Vue();


// const statebus = new vue;
// Vue.filter('to-uppercase', (value) => { 
//   return value.toUpperCase();
// });
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
