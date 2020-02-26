import userServices from "../../services/userServices";
import { messageService } from "../../services/noteService";
// import { EventBus } from "../../main";
// import register from "../services/userServices";
export default {
  //syntax for instantiating an object that has been defined
  name: "register",
  components: {}, //They help you extend basic HTML elements to encapsulate reusable code.
  data() {
    return {
      cards: {
        type: Array
      },
      // object: Object,
      service: true,
      loading: false,
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        text: Object,
        selected: true
      }
    };
  },
  mounted() {
    this.serviceRegister();
  },
  created() {
    this.subscription = messageService.getMessage().subscribe(message => {
      console.log("wqwq", message);
    });
    console.log(this.message.text.price,"ooo");
    

    // if (this.text.price == 99 || this.text.price == 49) {
    //   console.log("sdf",this.text);
      
    // }
  },
  methods: {
    serviceRegister() {
      userServices.userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        console.log("jjjjjjjjj", this.cards);
      });
    },
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

      userServices.register(obj).then(res => {
        // eslint-disable-next-line no-console
        console.log("hjkhbkjhjkhjkhk", res);
      });
      this.$router.push("/").catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    }
  }
};
