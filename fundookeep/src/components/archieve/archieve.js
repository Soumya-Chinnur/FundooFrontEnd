import noteService from "../services/noteService"
import displayNote from "../displayNote";

export default {
  name: "archieve",
  components: {displayNote},
  props: [],
  data() {
    return {
      archiveCards:[]
    };
  },
  computed: {},
  mounted() {

    noteService.getNotes().then(res=>{
      console.log("fsd",res);
      for (let index = 0; index < res.data.data.data.length; index++) {
        if (res.data.data.data[index].isArchived) {
          this.archiveCards.push(res.data.data.data[index]);
        }
      }

    })
    


  },
  methods: {}
};
