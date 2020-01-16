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

            this.messages = res.data.data.data;
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

        console.log("wed", res);
        this.messages = res.data.data.data;
        console.log("hsak", this.messages);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  },

  methods: {}
};
