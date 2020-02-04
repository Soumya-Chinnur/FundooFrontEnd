
import icons from "../icons";

export default {
  //standard syntax for instantiating an object that has been defined.
  name: "display-note",
  components: { icons }, //logical entities of code that contain functionality
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
      showDialog: false,
      dilogdata: Object,
      title: "",
      description: ""
    };
  },
  methods: {
    filledpin() {
      this.pin = !this.pin;
    },
    save() {
      console.log("in saveeee", this.dilogdata);

      this.showDialog = false;
    },
    archive(e) {
      console.log("e", e);
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    openDialog(card) {
      (this.dilogdata = card), console.log("editttttttt", this.dilogdata);
      this.showDialog = true;
      let editNote = {
        id: this.dilogdata.id
      };
      console.log("hhhhhhhhhhjjjk", editNote);
    },
    trash(e) {
      console.log("eeeeeeeeeeeee", e);
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    restore(e) {
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    deleteforever(e) {
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    updateNote(e) {
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    filledpins() {
      this.pins = !this.pins;
    }
  }
};
