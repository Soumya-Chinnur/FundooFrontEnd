import { addNote } from "../services/userServices";
import { updateNote } from "../services/userServices";
import icons from "../icons";
import { messageService } from "../services/noteService";
export default {
  name: "take-a-note",
  components: { icons },
  props: [],
  data() {
    return {
      flag: true,
      pin: true,

      addNote: {
        title: "",
        description: ""
      },
      updateNote: {
        title: " ",
        description: ""
      }
    };
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

      var obj = {
        title: this.addNote.title,
        description: this.addNote.description
      };

      console.log("dwsa", obj);
      addNote(obj)
        .then(res => {
          console.log("eeeeeeee", res);
          messageService.sendMessage(
            "Message from Home Page Component to App Component!"
          );
        })
        .catch(err => {
          console.log(err);
        });

      updateNote(obj)
        .then(res => {
          console.log("sou", res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    filledpin() {
      this.pin = !this.pin;
    }
  }
};
