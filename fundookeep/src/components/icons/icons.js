import noteService from "../services/noteService";
export default {
  name: "icons",
  components: {},
  props: {
    cardObj: Object
  },
  data() {
    return {};
  },

  computed: {},
  mounted() {},
  methods: {
    archive(card) {
      var obj = {
        noteIdList: [card.id],
        isArchived: true
      };
      noteService.archive(obj).then(res => {
        console.log("frd", res);
        this.$emit("archivedCard", card);
      });
    },
    trash(card) {
      var obj = {
        noteIdList: [card.id],
        isDeleted: true
      };
      noteService.trash(obj).then(res => {
        console.log("frg", res);
        this.$emit("deleteCard", card);
      });
    }
  }
};
