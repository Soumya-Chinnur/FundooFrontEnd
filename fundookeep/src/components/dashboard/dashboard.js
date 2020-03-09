import Vue from "vue";
import VueRouter from "vue-router";
import labelService from "../../services/labelService";
import userServices from "../../services/userServices";
Vue.use(VueRouter);
import { EventBus } from "../../eventBus";
import { normal } from "../../eventBus";
import noteService from "../../services/noteService";

export default {
  //standard syntax for instantiating an object that has been defined.
  name: "dashboard",
  data() {
    return {
      labels: [],
      flag: true,
      showDialog: false,
      item: String,
      item1: String,
      img: true,
      email: String,
      firstname: String,
      selectedEmployee: null,
      blogs: [],
      search: "",
      blog: "",
      title: String,
      Liston: true,
      image: String,
      lab: "",
      cart: true
    };
  },
  mounted() {
    this.email = localStorage.getItem("email");
    this.firstname = localStorage.getItem("firstName");
    // labelService.getLabelList().then(res => {
    //   this.labels = res.data.data.details;
    // });

    labelService.getLabelList().then(res => {
      console.log("were", res);

      this.labels = res.data.data.details;
    });

    userServices
      .dashboard()
      .then(res => {
        (this.blogs = []), (this.blogs = res.data.data.data);
        console.log("zxzzzz", this.blogs);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    showNavigation() {
      this.flag = !this.flag;
    },
    openDialog() {
      this.showDialog = true;
    },
    archive() {
      if (this.$router.currentRoute.fullPath === "/dashboard/archive") {
        this.item = "archive";
      }
    },
    // reminder() {
    //   if (this.$router.currentRoute.fullPath === "/dashboard/reminder") {
    //     this.item = "reminder";
    //   }
    // },
    note() {
      if (this.$router.currentRoute.fullPath === "/dashboard/note") {
        this.item = "note";
      }
    },
    trash() {
      if (this.$router.currentRoute.fullPath === "/dashboard/trash") {
        this.item = "trash";
      }
    },
    label() {
      if (this.$router.currentRoute.fullPath === "/dashboard/label") {
        this.item = "label";
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    listView() {
      this.Liston = !this.Liston;
      EventBus.$emit("listoff", this.Liston);
    },
    searchKey() {
      console.log("wwwwwwwwwww", this.search);
      normal.$emit("searching", this.search);
    },
    cartIcon() {
      // this.cart=false
      this.$router.push("/ShoppingCart");
    },
    Addlabel() {
      console.log("jjjjjj");
      var obj = {
        label: this.lab,
        isDeleted: false,
        userId: localStorage.getItem("userid")
      };
      console.log("popo", obj);

      labelService.addLabel(obj).then(res => {
        console.log("pppp", res);
        this.labels.push(res.data.label);
      });
    },
    processFile(e) {
      const filedata = new FormData();
      filedata.append("image", e.target.files[0]);
      console.log("image", e.target.files[0]);
      noteService.profilePic(filedata).then(res => {
        this.image = res.data;
        localStorage.setItem("image", res.data);
      });
    }
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.toUpperCase().includes(this.search.toUpperCase());
      });
    }
  }
};
