import icons from "../icons"
export default {
  name: "take-a-note",
  components: {icons},
  props: [],
  data() {
    return {
      flag: true,
      pin: true
    };
  },
  computed: {},
  mounted() {},
  methods: {
    reversecard() {
      console.log("heloooo")
      this.flag = !this.flag;
      console.log("hiiiiiiiiiiiiiiii",this.flag)
    },
    originalcard() {
      this.flag = !this.flag;
    },
    filledpin(){
      this.pin =!this.pin;
    }
   
  }
};
