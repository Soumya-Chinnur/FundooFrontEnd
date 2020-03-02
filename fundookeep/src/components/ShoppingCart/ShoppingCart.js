import userServices from "../../services/userServices";
export default {
  name: "shopping-cart",
  components: {},
  props: [],
  data() {
    return {
      amount: 0,
      cards: {
        type: Array
      },
      card: Object,
      mycaard: Object,
      cardid: ""
    };
  },
  computed: {},
  mounted() {
    this.serviceRegister();
    this.cardid = localStorage.getItem("cartId");
  },
  methods: {
    proceedCheckout() {
      this.amount += 50;
    },
    serviceRegister() {
      userServices.userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        console.log("jjjjjjjjj", this.cards);
        for (let i = 0; i < this.cards.length; i++) {
          console.log(this.cards[i].id, this.cardid);
          if (this.cardid == this.cards[i].id) {
            console.log("opopo", this.cards[i]);
            this.mycaard = this.cards[i];
          }
        }
      });
    }
  }
};
