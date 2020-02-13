import Vue from "vue";
import VueRouter from "vue-router";
import labelService from "../../services/labelService";
import userServices from "../../services/userServices";
Vue.use(VueRouter);
import { EventBus } from "../../main";
import { normal } from "../../main";

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
      lab: ""
    };
  },
  mounted() {
    this.email = localStorage.getItem("email");
    this.firstname = localStorage.getItem("firstName");
    labelService.getLabelList().then(res => {
      this.labels = res.data.data.details;
    });

    userServices
      .dashboard()
      .then(res => {
        (this.blogs = []), 
        this.blogs = res.data.data.data;
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
    Addlabel() {
       var obj = {
        label: this.lab,
        isDeleted: false,
        userId: localStorage.getItem("userid")
      };
      userServices.addLabel(obj).then(res => {
        this.labels.push(res.data.label);
      });
    }
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.toUpperCase().includes(this.search.toUpperCase());
      });
    }
  },
  processFile(e) {
    const filedata = new FormData();
    filedata.append("image", e.target.files[0]);

  }
};
