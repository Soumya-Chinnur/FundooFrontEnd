export default {
  name: 'forgotpassword',
  components: {},
  props: [],
  data () {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
     }
  },
  computed: {

  },
  mounted () {

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


