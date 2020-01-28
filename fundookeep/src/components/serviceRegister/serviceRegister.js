import { userService }  from "../services/userServices";

export default {
  name: "service-register",
  components: {},
  props: [],
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
  computed: {},
  mounted() {
    this.serviceRegister()
  },
  methods: {
    openDialog(card) {
      this.dialogdata = card;
      this.showDialog = true;
    },
    serviceRegister()
    {
      userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
      this.cards=res.data.data.data;
      console.log("jjjjjjjjj",this.cards)
      });
      
    }

  }
};
