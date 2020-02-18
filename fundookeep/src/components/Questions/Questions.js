import { messageService } from "../../services/noteService";

export default {
  name: "questions",
  components: {},
  props: [],
  data() {
    return {
      myHTML: "",
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
    // subscribe to home component messages
    this.subscription = messageService.getMessage().subscribe(message => {
      console.log(message, "wwwwwwwwwwwwwwwwwww");
    });
  },
  computed: {},
  mounted() {},
  methods: {}
};
