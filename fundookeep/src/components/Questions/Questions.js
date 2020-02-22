import qandaServices from "../../services/qandaService";
export default {
  name: "questions",
  components: {},
  props: [],
  data() {
    return {
      myHTML: "<p>ss</p>",
      flag: true,
      testing: Array,
      input1: null,
      input2: null,
      trap: true
    };
  },
  mounted() {
    qandaServices.getNote(this.$route.params.noteid).then(res => {
      console.log(res.data.data.data);
      this.testing = res.data.data.data;
    });
  },
  methods: {
    Ask() {
      console.log("lllllllllllllllllll", this.$route.params.noteid);
      var obj = {
        message: this.myHTML,
        notesId: this.$route.params.noteid
        // userId: localStorage.getItem("userid")
      };
      console.log(obj, "oioio");
      qandaServices
        .Ask(obj)
        .then(res => {
          console.log("qanda", res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
