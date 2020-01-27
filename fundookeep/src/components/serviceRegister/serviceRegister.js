
export default {
  name: 'service-register',
  components: {},
  props: [],
  data () {
    return {
      cards: {
        type: Array
      },
      dialogdata: Object,
      showDialog: false,
      showDialog1: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    openDialog(card){
this.dialogdata = card;
this.showDialog = true;
this.showDialog1 = true;

    }

  }
}


