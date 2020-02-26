import userServices from "../../services/userServices";
import { messageService } from "../../services/noteService";
export default {
  name: "service-register",
  data() {
    return {
      cards: {
        type: Array
      },
      card: Object,
      dialogdata: Object,
      showDialog: false,
      hover: false,
      event: ""
    };
  },
  mounted() {
    //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    this.serviceRegister();
  },
  methods: {
    openDialog(card) {
      this.dialogdata = card;
      this.showDialog = true;
      var object = {
        price: card.price,
        description: card.description
      };
      this.card = object;
      // EventBus.$emit("clicked",this.card)
    },
    serviceRegister() {
      userServices.userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        console.log("jjjjjjjjj", this.cards);
      });
    },
    proceedCheckout() {
      this.$router.push("/register");
      messageService.sendMessage(this.card);
      console.log(this.card, "ok");
    }
  }
};
