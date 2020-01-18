import { messageService } from "../services/noteService";

import { dashboard } from "../services/userServices";
import takeANote from "../takeANote";
import displayNote from "../displayNote";
export default {
  name: "note",
  components: { takeANote, displayNote },
  props: [],
  data() {
    return {
      messages: []
    };
  },
  created() {
    // subscribe to home component messages
    this.subscription = messageService.getMessage().subscribe(message => {
      if (message) {
        dashboard()
          .then(res => {
            this.messages = [];
            for (let index = 0; index < res.data.data.data.length; index++) {
              if (!res.data.data.data[index].isArchived) {
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
  computed: {},

  beforeDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  },
  mounted() {
    dashboard()
      .then(res => {
        this.messages = [];
        for (let index = 0; index < res.data.data.data.length; index++) {
          if (!res.data.data.data[index].isArchived) {
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
