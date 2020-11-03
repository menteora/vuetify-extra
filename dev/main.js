import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/vuetify-extra'
import JsonTree from 'vue-json-tree'
Vue.component('json-tree', JsonTree)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
