import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

export default { //standard syntax for instantiating an object that has been defined.
  name: 'dashboard',
  components: {},//They help you extend basic HTML elements to encapsulate reusable code
  props: [],
  data () {
    return {
      flag: false,
      
     }
  },
  computed: {//A computed property is used to declaratively describe a value that depends on other values

  },
  mounted () {//mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them

  },
  methods: {
    showNavigation()
    {
      this.flag = !this.flag ;
    }
  }
}


