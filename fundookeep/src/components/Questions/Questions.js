import qandaServices from "../../services/qandaService";
export default {
  name: "questions",
  components: {},
  props: [],
  data() {
    return {
      myHTML: "<p></p>",
      header: "AskedQuestion",
      flag: true,
      testing: Array,
      input1: null,
      input2: null,
      trap: true,
      firstname: String,
      lastname: String,
      n: 0
    };
  },
  mounted() {
    this.firstname = localStorage.getItem("firstName");
    this.lastname = localStorage.getItem("lastName");
    qandaServices.getNote(this.$route.params.noteid).then(res => {
      console.log(res.data.data.data, "98989");
      this.testing = res.data.data.data[0];
      console.log(this.testing, "uiuiu");
    });
  },
  methods: {
    Ask() {
      this.flag = !this.flag;
      this.header = "Question Asked";
      var obj = {
        message: this.myHTML,
        notesId: this.$route.params.noteid
        // userId: localStorage.getItem("userid")
      };
      qandaServices
        .Ask(obj)
        .then(res => {
          console.log("qanda", res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    close() {
      this.$router.push("/dashboard");
    },
    Star() {
      var obj = {
        message: this.myHTML,
        notesId: this.$route.params.noteid,
        userId: localStorage.getItem("userid")
      };
      qandaServices
        .Rating(obj)
        .then(res => {
          console.log("star", res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
