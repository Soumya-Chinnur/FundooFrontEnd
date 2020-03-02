import { messageService } from "../../services/noteService";
import takeANote from "../takeANote";
import displayNote from "../displayNote";
import userServices from "../../services/userServices";
export default {
  name: "note",
  components: { takeANote, displayNote }, //They help you extend basic HTML elements to encapsulate reusable code.
  props: [], //Props are how you pass data from a parent component down to a child component
  data() {
    return {
      messages: []
    };
  },
  created() {
    // subscribe to home component messages
    this.subscription = messageService.getMessage().subscribe(message => {
      if (message) {
        userServices
          .dashboard()
          .then(res => {
            this.messages = [];
            for (let index = 0; index < res.data.data.data.length; index++) {
              if (
                !res.data.data.data[index].isArchived &&
                !res.data.data.data[index].isDeleted
              ) {
                this.messages.push(res.data.data.data[index]);
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  },
  beforeDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  },
  mounted() {
    ////mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    userServices
      .dashboard()
      .then(res => {
        this.messages = [];

        for (let index = 0; index < res.data.data.data.length; index++) {
          if (
            !res.data.data.data[index].isArchived &&
            !res.data.data.data[index].isDeleted
          ) {
            this.messages.push(res.data.data.data[index]);
          }
        }
        console.log("asa",this.messages)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  },

  methods: {}
};
