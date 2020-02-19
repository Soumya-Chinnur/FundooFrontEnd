import { messageService } from "../../services/noteService";
import qandaServices from "../../services/qandaService";
export default {
  name: "questions",
  components: {},
  props: [],
  data() {
    return {
      title: "",
      description: "",
      myHTML: "",
      flag: true,
      config: {
        // { [module]: boolean (set true to hide) }
        hideModules: { bold: true },

        // you can override icons too, if desired
        // just keep in mind that you may need custom styles in your application to get everything to align
        // iconOverrides: { "bold": "<i class="your-custom-icon"></i>" },

        // if the image option is not set, images are inserted as base64
        image: {
          uploadURL: "/api/myEndpoint",
          dropzoneOptions: {}
        },

        // limit content height if you wish. If not set, editor size will grow with content.
        maxHeight: "10px"
      }
    };
  },
  created() {
    this.subscription = messageService.getMessage().subscribe(message => {
      console.log(message.text.title, "wwwwwwwwwwwwwwwwwww");
      this.title = message.text.title;
      this.description = message.text.description;
      console.log("1212", this.description);

      // if (message) {
      //   // add message to local state if not empty
      //   this.message.push(message);
      //   console.log(message, "1111111");
      // } else {
      //   // clear messages when empty message received
      //   this.message = [];
      // }
    });
  },
  computed: {
    // subscribe to home component messages
  },
  mounted() {},
  methods: {
    Ask() {
      var obj = {
        message: ""
      };
      qandaServices.Ask(obj).then(res => {
        console.log("qanda", res);
      });
    }
  }
};
