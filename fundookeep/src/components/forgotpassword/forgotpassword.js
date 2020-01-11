import { forgotPassword } from "../services/userServices"
export default { //syntax for instantiating object that has already been defined
  name: 'forgotpassword',
  components: {},//logical entities of code that contain functionality
  props: [], //Props are how you pass data from a parent component down to a child component
  data () {
    return {
      loading: false,
      forgotpassword: {
        email: ""
        
      }
     }
  },
 
  methods: {
    auth() {
      var obj={
        email:this.forgotpassword.email
      }
      forgotPassword(obj).then(res=>{
          // eslint-disable-next-line no-console
        console.log(res)
      }).catch(err=>{
          // eslint-disable-next-line no-console
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


