import { addNote } from "../services/userServices";
import icons from "../icons";
export default {
  name: "take-a-note",
  components: { icons },
  props: [],
  data() {
    return {
      flag: true,
      pin: true,
     user {
       title: "";
     }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    reversecard() {
      console.log("heloooo");
      this.flag = !this.flag;
      console.log("hiiiiiiiiiiiiiiii", this.flag);
    },
    originalcard() {
      this.flag = !this.flag;
      addNote(){
        var obj = {
          title: this.,
       
        };
      }
      .then(res => {
        // console.log("niiiiiiiiiiiiiiiiiiiii", res.data.id);
        // localStorage.setItem("token", res.data.id);
        // eslint-disable-next-line no-console
        console.log("eeeeeeee", res);
     
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    },
    filledpin() {
      this.pin = !this.pin;
    }

  }
};
