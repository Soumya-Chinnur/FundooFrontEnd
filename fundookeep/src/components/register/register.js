// import register from "../services/userServices"
export default { //syntax for instantiating an object that has been defined
  name: 'register',
  components: {},//logical entities of code that contain functionality
  props: [], //Props are how you pass data from a parent component down to a child component
  data () {
    return {
      loading: false,
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };

  
  },
  computed: {//A computed property is used to declaratively describe a value that depends on other values

  },
  mounted () {  //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them

  },
  methods: {
    auth() {
      // var obj={
      //   firstName:this.register.firstName,
      //   lastName:this.register.lastName,
      //   email:this.register.email,
      //   password:this.register.password
      // }
      // register(obj).then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }

  }