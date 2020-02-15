
import noteService from "../../services/noteService";
import icons from "../icons";
import { messageService } from "../../services/noteService";
export default {
  name: "take-a-note",
  components: { icons },//They help you extend basic HTML elements to encapsulate reusable code.
  props: [], //used to pass data from parent to child component
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
      },
      background: "#FFFF"
    };
  },
  methods: {
    reversecard() {
      this.flag = !this.flag;
    },
    originalcard() {
      this.flag = !this.flag;

      var obj = {
        title: this.addNote.title,
        description: this.addNote.description
      };

      console.log("dwsa", obj);
      noteService.addNote(obj)
        .then(res => {
          console.log("addnoteeeeeeeeeeeeeee", res);
          messageService.sendMessage(
            "Message from Home Page Component to App Component!"
          );
        })
        .catch(err => {
          console.log(err);
        });

        noteService.updateNote(obj)
        .then(res => {
          console.log("sou", res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    filledpin() {
      this.pin = !this.pin;
    },
    color(e) {
      this.background = e;
    }
  }
};
