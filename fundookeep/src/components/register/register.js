import { register } from "../services/userServices";

// import register from "../services/userServices";
export default {
  //syntax for instantiating an object that has been defined
  name: "register",
  components: {}, //They help you extend basic HTML elements to encapsulate reusable code.

  data() {
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

  methods: {
    auth() {
      // eslint-disable-next-line no-console
      var obj = {
        firstName: this.register.firstName,
        lastName: this.register.lastName,
        email: this.register.email,
        password: this.register.password,
        service: "advance"
      };
      // eslint-disable-next-line no-console
      console.log("kjdkdldw", obj);

      register(obj).then(res => {
        // eslint-disable-next-line no-console
        console.log("hjkhbkjhjkhjkhk", res);
      });
      this.$router.push("/login").catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });

      // this.loading = true;
      // setTimeout(() => {
      //   this.loading = false;
      // }, 5000);
    }
  }
};
