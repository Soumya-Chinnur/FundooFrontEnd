import icons from "../icons";
import noteService, { messageService } from "../../services/noteService";
import { EventBus } from "../../main";
import { normal } from "../../main";
// import draggable from 'vuedraggable';
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
      description: "",
      Liston: "",
      character: "",
      search: "",
      richy: []
    };
  },
  mounted() {},
  created() {
    normal.$on("searching", character => {
      this.character = character;
      console.log("anushhhhhhhhhhhhhhhhhhhhhhhhhaaaa", character);
      console.log("nnnnnnnnnnnnnnnnnnnnnn", this.character);
    });
    console.log("dddddddddddddd");
    EventBus.$on("listoff", Liston => {
      console.log("777777", Liston);
      this.Liston = Liston;
    });
  },
  computed: {
    filteredList() {
      return this.cards.filter(card => {
        return (
          card.title.toLowerCase().includes(this.character.toLowerCase()) ||
          card.description.toLowerCase().includes(this.character.toLowerCase())
        );
      });
    }
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
    unarchive(e) {
      this.archive(e);
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
    },

    deleteChip(card) {
      console.log("ffffffffffff", card);
      var obj = {
        noteIdList: [card.id],
        reminder: [""]
      };
      console.log(obj, "rrrrrrrrrrrrrrrrrrrrrr");
      noteService.removeReminder(obj).then(res => {
        console.log("reminderrrrrrrrr", res);
        this.$emit("reminderCard", card);
        messageService.sendMessage(
          "Message from Home Page Component to App Component!"
        );
      });
    }
  }
};
