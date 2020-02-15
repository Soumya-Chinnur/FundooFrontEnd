import userServices from "../../services/userServices";
export default {
  name: "service-register",
  data() {
    return {
      cards: {
        type: Array
      },
      dialogdata: Object,
      showDialog: false,
      hover: false
    };
  },
  mounted() { //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    this.serviceRegister();
  },
  methods: {
    openDialog(card) {
      this.dialogdata = card;
      this.showDialog = true;
    },
    serviceRegister() {
      userServices().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        console.log("jjjjjjjjj", this.cards);
      });
    }
  }
};
