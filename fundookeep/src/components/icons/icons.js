import noteService from "../services/noteService";
export default {
  name: "icons",
  components: {},
  props: {
    cardObj: Object
  },
  data() {
    return {
      flag:true,
     
      colorArray: [
        [
          { color: "#FFFFFF", name: "White" },
          { color: "#F28B82", name: "Red" },
          { color: "#FBBC04", name: "Orange" },
          { color: "#FFF475", name: "Yellow" }
        ],

        [
          { color: "#CCFF90", name: "Green" },
          { color: "#A7FFEB", name: "Teal" },
          { color: "#CBF0F8", name: "Blue" },
          { color: "#AECBFA", name: "Darkblue" }
        ],

        [
          { color: "#D7AEFB", name: "Purple" },
          { color: "#FDCFE8", name: "Pink" },
          { color: "#E6C9A8", name: "Brown" },
          { color: "#E8EAED", name: "Gray" }
        ]
      ]
    };
  },

  computed: {},
  mounted() {},
  methods: {
    label() {
      this.flag = !this.flag;
      
    // addLabel() {
    //   this.flag1 = !this.flag1;
    // },
    },
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
      console.log("hhhhhhhhhhhhhhhhhhhhhhh");
      
      var obj = {
        noteIdList: [card.id],
        isDeleted: true
      };
      noteService.trash(obj).then(res => {
        console.log("frg", res);
        this.$emit("deleteCard", card);
      });
    },
    colorDisplay(color, card) {
      if (card == undefined) {
        this.$emit("changeColor", color);
      } else {
        card.color = color;
        this.colorsEdit(color, card);
      }
    },
    colorsEdit(color, card) {
      var obj = {
        noteIdList: [card.id],
        color: color
      };
      noteService.color(obj).then(res => {
        console.log("gou", res);
        //
      });
    }

}
}