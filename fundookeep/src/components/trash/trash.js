import noteService from "../services/noteService";
import displayNote from "../displayNote";
export default {
  name: "trash",
  components: { displayNote },//They help you extend basic HTML elements to encapsulate reusable code.
  props: [],//Props are how you pass data from a parent component down to a child component
  data() {
    return {
      deleteCards:[]
    };
  },
  computed: {},
  mounted() { //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    noteService.getNotes().then(res => {
      console.log("deleteeeeeeeeeeeeeeeee", res);
      for (let index = 0; index < res.data.data.data.length; index++) {
        if (res.data.data.data[index].isDeleted) {
          this.deleteCards.push(res.data.data.data[index]);
        }
      }
      console.log("sssssssssssssssssssss", this.deleteCards);
    });
  },
};
