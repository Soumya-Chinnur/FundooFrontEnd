import Vue from "vue";
import VueRouter from "vue-router";
import labelService from "../services/labelService";
Vue.use(VueRouter);

export default {
  //standard syntax for instantiating an object that has been defined.
  name: "dashboard",
  components: {}, //They help you extend basic HTML elements to encapsulate reusable code
  props: [],
  data() {
    return {
      label: [],
      flag: false
    };
  },
  computed: {
    //A computed property is used to declaratively describe a value that depends on other values
  },
  mounted() {
    labelService.getLabelList().then(res => {
      console.log("labellllllllllllllll", res);
     
          this.label.push(res.data.data.data);
    });
  },
  methods: {
    showNavigation() {
      this.flag = !this.flag;
    }
  }
};
