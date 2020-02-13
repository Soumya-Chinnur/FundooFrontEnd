import userServices from "../../services/userServices"
export default {
  //syntax for instantiating an object that has been defined
  name: "login",
  props: [], //Props are how you pass data from a parent component down to a child component
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
    };
  },
  mounted() {
    //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
  },
  methods: {
    auth() {
      var obj = {
        email: this.login.email,
        password: this.login.password
      };
      userServices.login(obj)
        .then(res => {
          console.log("niiiiiiiiiiiiiiiiiiiii", res.data);
          localStorage.setItem("token", res.data.id);
          // eslint-disable-next-line no-console
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("firstName", res.data.firstName);
          localStorage.setItem("userid", res.data.userId);
          this.$router.push("/dashboard");
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }
};
