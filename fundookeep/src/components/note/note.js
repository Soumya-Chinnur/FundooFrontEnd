import { messageService } from "../services/noteService";
import { dashboard } from "../services/userServices";
import takeANote from "../takeANote";
import displayNote from "../displayNote";
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
      console.log("dddddddd");

      if (message) {
        dashboard()
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

            console.log("hsa111111111111111111111111k", this.messages);
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
    dashboard()
      .then(res => {
        this.messages = [];
        console.log(res, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

        for (let index = 0; index < res.data.data.data.length; index++) {
          if (
            !res.data.data.data[index].isArchived &&
            !res.data.data.data[index].isDeleted
          ) {
            this.messages.push(res.data.data.data[index]);
          }
        }
         console.log("wed", res);
        console.log("hsak", this.messages);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  },

  methods: {}
};
