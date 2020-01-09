// import register from "../services/userServices"
export default {
  name: 'register',
  components: {},
  props: [],
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
  computed: {

  },
  mounted () {

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