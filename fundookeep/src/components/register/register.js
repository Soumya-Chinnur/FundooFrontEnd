import userServices from "../../services/userServices";

export default {
  //syntax for instantiating an object that has been defined
  name: "register",
  components: {}, //They help you extend basic HTML elements to encapsulate reusable code.
  data() {
    return {
      cardsooo: "",
      cards: Array,
      card: Object,
      // object: Object,
      service: true,
      loading: false,
      test: Object,
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      price: "",
      flag: false,
      mycaard: Object,
      // color: true
    };
  },
  mounted() {
    this.serviceRegister();
    this.card.id = localStorage.getItem("cartId");
    console.log(this.card.id, "iuiu");
  },
  created() {},
  methods: {
    serviceRegister() {
      userServices.userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        // console.log("jjjjjjjjj", this.cards);
        // console.log(this.cards[0].id, "ekdkid");
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
      // eslint-disable-next-line no-console
      var obj = {
        firstName: this.register.firstName,
        lastName: this.register.lastName,
        email: this.register.email,
        password: this.register.password,
        service: this.mycaard.name
      };
      // eslint-disable-next-line no-console
      console.log("kjdkdldw", obj);

      userServices.register(obj).then(res => {
        // eslint-disable-next-line no-console
        console.log("hjkhbkjhjkhjkhk", res);
      });
    },
    signIn() {
      // productId: localStorage.getItem("cartId");

      this.$router.push("/login");
      // userServices
      //   .productCart(obj)
      //   .then(res => {
      //     console.log("prava", res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
