import icons from "../icons";
export default {
  name: "display-note",
  components: { icons },
  props: {
    cards: {
      type: Array
    }
  },
  data() {
    return {
      pin: true,
      pins: true,
      vgcolor: "#FFFF",
      showDialog: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    filledpin() {
      this.pin = !this.pin;
    },
    close() {
      this.showDialog = false
    },
    archive(e) {
      console.log("e", e);
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    trash(e) {
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    filledpins() {
      this.pins = !this.pins;
    },

  }
};
