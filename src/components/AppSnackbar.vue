
<template>
  <v-snackbar v-model="snackbar" color="error" :timeout="4000" vertical="vertical">
    {{ message }}
    <v-btn dark text @click="snackbar = false">Chiudi</v-btn>
  </v-snackbar>
</template>

<script>
import Plugin from '../plugin.js'

export default {
  data () {
    return {
      snackbar: false,
      message: ''
    }
  }, /*
  computed: {
    message: {
      // getter
      get: function() {
        this.snackbar = true;
        return this.getAppMessage();
      }
    }
  }, */
  methods: {
    show (message) {
      this.snackbar = true
      this.message = message
    }
  },
  beforeMount () {
    // here we need to listen for emited events
    // we declared those events inside our plugin
    Plugin.EventBus.$on('appMessageShow', params => {
      this.show(params)
    })
  } /*,
  watch: {
      appMessage: function (val){
          console.log('changed')
      }
      },
  watch: {
    $appMessage: function (val) {
      this.snackbar = true
      this.message = this.$appMessage
    }
  } */
}
</script>

<style scoped>
</style>
