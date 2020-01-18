import noteService from "../services/noteService"
import displayNote from "../displayNote"
export default {
  name: 'delete',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {displayNote},
  mounted () {
    noteService.getNotes().then(res=>{
      console.log("fsd",res);
      for (let index = 0; index < res.data.data.data.length; index++) {
        if (res.data.data.data[index].isDeleted) {
          this.deleteCards.push(res.data.data.data[index]);
        }
      }

    })
  },
  methods: {

  }
}


