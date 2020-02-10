import Vue from "vue";
import VueRouter from "vue-router";
import labelService from "../services/labelService";
import { dashboard } from "../services/userServices";
Vue.use(VueRouter);
import { EventBus } from "../../main";

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
      Liston: true
    };
  },
  mounted() {
    this.email = localStorage.getItem("email");
    this.firstname = localStorage.getItem("firstName");
    //mounted() is called after DOM has been mounted so you can access the reactive component, templates, and DOM elements and manipulate them
    labelService.getLabelList().then(res => {
      this.labels = res.data.data.details;
      console.log("labelllllllll", this.labels);
    });
    dashboard()
      .then(res => {
        (this.blogs = []), console.log("uuuuuuuuuu", res);
        this.blogs = res.data.data.data;
        console.log("zxzzzz", this.blogs);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
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
