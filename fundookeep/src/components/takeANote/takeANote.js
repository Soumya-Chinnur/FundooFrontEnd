
export default {
  name: 'take-a-note',
  components: {},
  props: [],
  data () {
    return {
      flag:false,

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    openCard()
    {
      this.flag = !this.flag ;
    }
  }
}


