
export default { //standard syntax for instantiating an object that has been defined.
  name: 'dashboard',
  components: {},//They help you extend basic HTML elements to encapsulate reusable code
  props: [],
  data () {
    return {
      flag: false,
      
     }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    showNavigation()
    {
      this.flag = !this.flag ;
    }
  }
}


