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
      showDialog: false,
      dilogdata: Object,
      title: "",
      description: ""
    };
  },
  computed: {},
  mounted() {},
  methods: {
    filledpin() {
      this.pin = !this.pin;
    },
    save(tit, desc) {
      console.log("in saveeee", this.dilogdata.id);
      console.log("kkkktitle,,,,--", tit);
      console.log("kkkktitle,,,,--", desc);

      this.showDialog = false;
    },
    archive(e) {
      console.log("e", e);
      let ind = this.cards.indexOf(e);
      this.cards.splice(ind, 1);
    },
    openDialog(card) {
      (this.dilogdata = card), console.log("editttttttt", this.dilogdata.id);
      this.showDialog = true;
      let editNote = {
        id: this.dilogdata.id
        // title: this.addNote.title,
        // description: this.addNote.description
      };
      console.log("hhhhhhhhhhjjjk", editNote);
    },
    trash(e) {
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
