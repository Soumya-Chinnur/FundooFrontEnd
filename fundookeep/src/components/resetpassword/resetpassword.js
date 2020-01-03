
export default {
  name: 'resetpassword',
  components: {},
  props: [],
  data () {
    return {
      
  form:{
    newpassword: null,
    confirmpassword: null
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


