import noteService from "../../services/noteService";
// import { textService } from "../../services/noteService";
import labelService from "../../services/labelService";
import userServices from "../../services/userServices";
import datetime from "vuejs-datetimepicker";
import { filterBy } from "../icons/filterBy";
import { filterBylabel } from "../icons/filterBy";

export default {
  //syntax for instantiating object that has already been defined
  name: "icons",
  components: {
    datetime
  },
  props: {
    //Props are how you pass data from a parent component down to a child component
    cardObj: Object
  },
  data() {
    return {
      cards: {
        type: Array
      },
      isdisable: false,
      showSnackbar: false,
      showSnackbar1: false,
      showSnackbar2: false,
      showSnackbar3: false,
      showSnackbar4: false,
      position: "center",
      duration: 4000,
      isInfinity: false,
      mycaard: Object,
      card: Object,
      name: String,
      advance: String,
      basic: String,
      route: true,
      route1: true,
      route2: true,
      pin: true,
      items: [],
      box: [],
      date: null,
      country: null,
      collaborators: [],
      collab: [],
      val: null,
      collaborator: "",
      email: String,
      dateObj: new Date(),
      isCheckAll: false,
      showDialog: false,
      userInput: "",
      userInput1: "",
      label: "",
      message: [],
      flag: true,
      task: Object,
      // service: true,

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
      ],
      emailFlag: false,
      lab: ""
    };
  },

  computed: {},
  mounted() {
    this.serviceRegister();
    this.card.id = localStorage.getItem("cartId");
    if (this.mycaard.name == "basic") {
      console.log(this.mycaard.name, "sssssssssssssssssssssssssssss");
      this.isdisable = true;
    }
    console.log(this.card.id, "pravallika");
    this.email = localStorage.getItem("email");

    labelService.getLabelList().then(res => {
      this.items = res.data.data.details;
      for (let i = 0; i < this.items.length; i++) {
        this.box.push(this.items[i].label);
      }
    });

    //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    if (this.$router.currentRoute.fullPath === "/dashboard/archive") {
      this.route = true;
    } else {
      this.route = false;
    }
    if (this.$router.currentRoute.fullPath === "/dashboard/trash") {
      this.route1 = true;
      this.route2 = true;
    } else {
      this.route1 = false;
      this.route2 = false;
    }
    noteService.collaborator().then(res => {
      for (let i = 0; i < res.data.length - 2200; i++) {
        this.collaborators.push(res.data[i]);
      }
    });
  },
  methods: {
    serviceRegister() {
      userServices.userService().then(res => {
        console.log("serviceeeeeeeeeeeeeeeee", res.data.data.data);
        this.cards = res.data.data.data;
        console.log("Iconcards", this.cards);
        for (let i = 0; i < this.cards.length; i++) {
          console.log(this.cards[i].id, this.card.id);

          if (this.card.id == this.cards[i].id) {
            console.log("opopo", this.cards[i]);
            this.mycaard = this.cards[i];
            
            if (this.mycaard.name == "basic") {
              console.log(this.mycaard.name, "sssssssssssssssssssssssssssss");
              this.isdisable = true;
              this.showSnackbar= true;
            }
            if(this.mycaard.name == "advance"){
              this.showSnackbar= false;
 
             }
          }
        }
        console.log(" this.isdisable : ",  this.isdisable);
        
      });
    },
    filterBy,
    filterBylabel,
    addLabel() {
      this.pin = !this.pin;
    },

    archive(card) {
      var obj = {
        noteIdList: [card.id],
        isArchived: true
      };
      noteService.archive(obj).then(res => {
        console.log("archiveeeeeeeee", res);
        this.$emit("archivedCard", card);
      });
    },
    unarchive(card) {
      var obj1 = {
        noteIdList: [card.id],
        isArchived: false
      };
      noteService.archive(obj1).then(res => {
        console.log("unarchiveeeeeeee", res);
        this.$emit("unarchivedCard", card);
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
      // this.service = !this.service;
      if (card == undefined) {
        this.$emit("changeColor", color);
      } else {
        card.color = color;
        this.colorsEdit(color, card);
      }
    },
    colorsEdit(color, card) {
      // this.service = !this.service;
      var obj = {
        noteIdList: [card.id],
        color: color
      };
      noteService.color(obj).then(res => {
        console.log("colorrrrrrrrrrrrrrr", res);
        //
      });
    },
    createLabel() {
      console.log("shdw");

      var obj = {
        label: this.userInput,
        isDeleted: false,
        userId: localStorage.getItem("userid")
      };
      console.log("000", obj);

      userServices
        .addLabel(obj)
        .then(res => {
          console.log("123", res);
          this.items.push(res.data.label);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addCollaborator(email) {
      this.userInput1 = email;
      this.emailFlag = true;
      //
      setTimeout(function() {
        this.emailFlag = false;
      }, 5000);
    },
    saveCollaborator(cardObj) {
      console.log("iii", cardObj, this.userInput1);
      this.showDialog = false;

      var obj = {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: this.userInput1,
        userId: this.userInput1
        // id: cardObj.id
      };
      noteService.addCollaborator(obj, cardObj.id).then(res => {
        console.log("collaaab", res);
      });
    },
    latertoday(card) {
      const rem = new Date(
        this.dateObj.getFullYear(),
        this.dateObj.getMonth(),
        this.dateObj.getDate(),
        20,
        0,
        0,
        0
      );
      console.log(rem);
      var obj = {
        noteIdList: [card.id],
        reminder: rem
      };
      console.log(obj, "kkkkkkkkkkkkkkkk");
      noteService.reminder(obj).then(res => {
        console.log("reminderrrrrrrrrrrrrrrrrrrrr", res);
        //
      });
    },
    askQA(cardObj) {
      console.log("241 icons =================", cardObj);
      // EventBus.$emit('i-got-clicked', cardObj);
      // textService.sendMessage(JSON.stringify(cardObj));
      this.$router.push("/dashboard/questions/" + cardObj.id);
    },
    showQuestions(cardObj) {
      this.$router.push("/dashboard/questions/" + cardObj.id);
    },
    nextweek(card) {
      const nextWeek = new Date(
        this.dateObj.getFullYear(),
        this.dateObj.getMonth(),
        this.dateObj.getDate() + 7,
        8,
        0,
        0,
        0
      );
      console.log(nextWeek);
      var obj = {
        noteIdList: [card.id],
        reminder: nextWeek
      };
      noteService.reminder(obj).then(res => {
        console.log("111111111111111111", res);
      });
    },
    snackBar(){
    this.showSnackbar=true;
    },
    snackBar1(){
      this.showSnackbar1=true;
      },
    snackBar2(){
        this.showSnackbar2=true;
        },
    snackBar3(){
          this.showSnackbar3=true;
        },
    snackBar4(){
          this.showSnackbar4=true;
        }
  }
};
