export default { //syntax for instantiating object that has already been defined
  name: 'forgotpassword',
  components: {},//logical entities of code that contain functionality
  props: [], //Props are how you pass data from a parent component down to a child component
  data () {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
     }
  },
  computed: {//A computed property is used to declaratively describe a value that depends on other values

  },
  mounted () { //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them


  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
}


