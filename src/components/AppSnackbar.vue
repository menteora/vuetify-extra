
<template>
  <v-snackbar v-model="snackbar" :color="type" :timeout="4000" vertical="vertical">
    <component v-bind:is="type">{{ message }}</component>
    <v-btn dark text @click="snackbar = false">Chiudi</v-btn>
  </v-snackbar>
</template>

<script>
// import Plugin from '@/plugin.js'
import Info from '@/components/AppSnackbar/Info.vue'
import Error from '@/components/AppSnackbar/Error.vue'
import Warning from '@/components/AppSnackbar/Warning.vue'
import Empty from '@/components/AppSnackbar/Empty.vue'
import { EventBus } from '@/components/EventBus/index.js'

export default {
  components: {
    Info,
    Error,
    Warning,
    Empty
  },
  data () {
    return {
      snackbar: false,
      message: '',
      type: 'empty'
    }
  },
  methods: {
    show (params) {
      this.snackbar = true
      this.message = params.message
      this.type = params.type ? params.type : this.type
    }
  },
  beforeMount () {
    EventBus.$on('app-message-show', params => {
      this.show(params)
    })
  }
}
</script>

<style scoped>
</style>
