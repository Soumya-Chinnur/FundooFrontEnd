import noteService from "../services/noteService";
export default { //syntax for instantiating object that has already been defined
  name: "icons",
  components: {},
  props: { //Props are how you pass data from a parent component down to a child component
    cardObj: Object
  },
  data() {
    return {
      route: true,
      route1: true,
      route2: true,
      pin: true,
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
  mounted() { //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    if (this.$router.currentRoute.fullPath === "/dashboard/archive") {
      console.log(this.$router.currentRoute.fullPath);
      this.route = true;
    } else {
      console.log(this.$router.currentRoute.fullPath);
      this.route = false;
    }
    if (this.$router.currentRoute.fullPath === "/dashboard/trash") {
      console.log(this.$router.currentRoute.fullPath);
      this.route1 = true;
      this.route2 = true;
    } else {
      console.log(this.$router.currentRoute.fullPath);
      this.route1 = false;
      this.route2 = false
    }
  
  },
  methods: {
    addLabel(){
      this.pin =! this.pin;
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
    unarchive(card) {
      var obj1 = {
        noteIdList: [card.id],
        isArchived: false
      };
      noteService.archive(obj1).then(res => {
        console.log("unarchive", res);
        this.$emit("unarchivedCard", card);
        this.click = !this.click;
      });
    },
    trash(card) {
      var obj = {
        noteIdList: [card.id],
        isDeleted: true
      };
      noteService.trash(obj).then(res => {
        console.log("deleteeeeeeeeeeeeeeeeeeeeeeee", res);
        this.$emit("deleteCard", card);
      });
    },
    restore(card) {
      var obj1 = {
        noteIdList: [card.id],
        isDeleted: false
      };
      noteService.trash(obj1).then(res => {
        console.log("restoreeeeeeeeeeeee", res);
        this.$emit("restorecard", card);
      });
    },
    deleteforever(card) {
      var obj1 = {
        noteIdList: [card.id],
        isDeleted: false
      };
      noteService.trash(obj1).then(res => {
        console.log("deletforevereeeeeeeeeeeee", res);
        this.$emit("deleteforvercard", card);
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
};
