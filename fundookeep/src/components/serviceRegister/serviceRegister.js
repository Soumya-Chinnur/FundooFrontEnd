import userServices from "../../services/userServices";
export default {
  name: "service-register",
  data() {
    return {
      cards: {
        type: Array
      },
      id: String,
      card: Object,
      dialogdata: Object,
      showDialog: false,
      hover: false,
      event: "",
      cardId: ""
    };
  },
  mounted() {
    //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    this.serviceRegister();
    // this.clickAtcard();
  },
  created() {},
  methods: {
    openDialog(card) {
      console.log(card,"hdfchgdehc");
      
      this.dialogdata = card;
      this.showDialog = true;
      var object = {
        price: card.price,
        description: card.description
      };
      this.card = object;
      console.log(this.card,"jjjjjjjjjjjjjjj");
      
    },
    serviceRegister() {
      userServices.userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        console.log("jjjjjjjjj", this.cards);
      });
    },
    proceedCheckout() {
      var obj = {
        productId: localStorage.getItem("cartId")
      };
      this.$router.push("/register");
      userServices
        .productCart(obj)
        .then(res => {
          console.log("asds", res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickAtcard(card) {
      console.log("kjkjk", card);
      localStorage.setItem("cartId", card.id);
    }
  }
};
