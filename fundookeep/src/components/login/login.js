import userServices from "../../services/userServices";
export default {
  //syntax for instantiating an object that has been defined
  name: "login",
  props: [], //Props are how you pass data from a parent component down to a child component
  data() {
    return {
      cards: {
        type: Array
      },
      card: Object,
      loading: false,
      login: {
        email: "",
        password: ""
      },
      mycaard: Object
    };
  },
  mounted() {
    this.serviceRegister();
    // this.card.id = localStorage.getItem("card.id");
    this.card.id = localStorage.getItem("cartId");
  },
  methods: {
    serviceRegister() {
      userServices.userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        console.log("jjjjjjjjj", this.cards);
        for (let i = 0; i < this.cards.length; i++) {
          console.log(this.cards[i].id, this.card.id);

          if (this.card.id == this.cards[i].id) {
            console.log("opopo", this.cards[i]);
            this.mycaard = this.cards[i];
          }
        }
      });
    },
    auth() {
      var obj = {
        email: this.login.email,
        password: this.login.password
      };
      userServices
        .login(obj)
        .then(res => {
          console.log("niiiiiiiiiiiiiiiiiiiii", res.data);
          // localStorage.setItem("token", res.data.id);
          // eslint-disable-next-line no-console
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("firstName", res.data.firstName);
          localStorage.setItem("lastName", res.data.lastName);
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
