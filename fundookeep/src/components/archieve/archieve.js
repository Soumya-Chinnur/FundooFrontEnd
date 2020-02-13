import noteService from "../../services/noteService";
import displayNote from "../displayNote";
export default {
    //standard syntax for instantiating an object that has been defined.
  name: "archieve",
  components: { displayNote }, //logical entities of code that contain functionality
  props: [],
  data() {
    return {
      archiveCards: [],
      };
  },
  mounted() {//mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    noteService.getNotes().then(res => {
      console.log("Archiveeeeeeeeeeee", res);

      for (let index = 0; index < res.data.data.data.length; index++) {
        if (res.data.data.data[index].isArchived) {
          this.archiveCards.push(res.data.data.data[index]);
        }
      }
    });
  },
};
