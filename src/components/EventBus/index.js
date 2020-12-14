import Vue from 'vue'
export const EventBus = new Vue()

Vue.prototype.$appMessage = {
  show (params) {
    EventBus.$emit('app-message-show', params)
  }
}
