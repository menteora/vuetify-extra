
<template>
  <v-snackbar v-model="snackbar" :color="type" :timeout="4000" vertical="vertical">
    <component v-bind:is="type">{{ message }}</component>
    <v-btn dark text @click="snackbar = false">Chiudi</v-btn>
  </v-snackbar>
</template>

<script>
import Plugin from '../plugin.js'
import info from './AppSnackbar/info.vue'
import error from './AppSnackbar/error.vue'
import warning from './AppSnackbar/warning.vue'
import empty from './AppSnackbar/empty.vue'

export default {
  components: {
    info,
    error,
    warning,
    empty
  },
  props: {
    type: {
      type: String,
      default: 'empty',
      validator: function (value) {
        // The value must match one of these strings
        return ['info', 'warning', 'error', 'empty'].indexOf(value) !== -1
      }
    }
  },
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
