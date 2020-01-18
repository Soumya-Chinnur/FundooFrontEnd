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
      pin: true
    };
  },
  computed: {},
  mounted() {},
  methods: {
    filledpin() {
      this.pin = !this.pin;
    },
    archive(e) {
      console.log("e", e);
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    trash(e) {
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    }
  }
};
