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
      labels: [],
      flag: false,

      showDialog: false
    };
  },
  computed: {
    //A computed property is used to declaratively describe a value that depends on other values
  },
  mounted() {
    labelService.getLabelList().then(res => {
      // console.log("labellllllllllllllll", res.data.data.details);

      this.labels = res.data.data.details
      console.log("",this.labels)

      // for (let index = 0; index < res.data.data.details[index].length; index++) {
      //   if (res.data.data.details[index]) {
      //     this.labels.push(res.data.data.details[index]);
      //   }
      // }
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
