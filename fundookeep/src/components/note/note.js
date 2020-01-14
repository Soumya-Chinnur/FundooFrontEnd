
import { dashboard } from "../services/userServices";
import takeANote from "../takeANote"
import displayNote from "../displayNote"
export default {
  name: 'note',
  components: {takeANote,displayNote},
  props: [],
  data () {
    return {
      messages:[]

    }
  },
  computed: {

  },
  mounted () {
   
    dashboard()
      .then(res => {
        // console.log("niiiiiiiiiiiiiiiiiiiii", res.data.id);
        // localStorage.setItem("token", res.data.id);
        // eslint-disable-next-line no-console
        console.log("wed", res);
        this.messages=res.data.data.data;
        console.log("hsak",this.messages)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  },

  methods: {

  }
}


