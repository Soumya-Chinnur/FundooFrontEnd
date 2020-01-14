import icons from "../icons"
export default {
  name: 'display-note',
  components: {icons},
  props: {
    cards:{
      type:Array
    }
  },
  data () {
    return {
      pin:true

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    filledpin() {
      this.pin = !this.pin;
    },
    
  }
}


