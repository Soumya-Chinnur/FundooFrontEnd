import login from "../services/userServices"
export default {
  name: 'login',
  components: {},
  props: [],
  data () {
    return {
      loading: false,
      login: {
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
      var obj={
        email:this.login.email,
        password:this.login.password
      }
      login(obj).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }

  }


