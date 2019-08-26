
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
  },
  methods: {
    show (message) {
      this.snackbar = true
      this.message = message
    }
  },
  beforeMount () {
    Plugin.EventBus.$on('AppMessageShow', params => {
      this.show(params)
    })
  }
}
</script>

<style scoped>
</style>
