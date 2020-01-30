import Vue from "vue";
import VueRouter from "vue-router";
import labelService from "../services/labelService";
Vue.use(VueRouter);

export default {
  //standard syntax for instantiating an object that has been defined.
  name: "dashboard",
  data() {
    return {
      labels: [],
      flag: false,

      showDialog: false
    };
  },
  mounted() { //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    labelService.getLabelList().then(res => {
      this.labels = res.data.data.details;
      console.log("", this.labels);
    });
  },
  methods: {
    showNavigation() {
      this.flag = !this.flag;
    },
    openDialog() {
      this.showDialog = true;
    }
  }
};
