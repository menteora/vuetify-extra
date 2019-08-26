// Import vue components
import * as components from './components/index'

// install function executed by Vue.use()
function install (Vue) {
  if (install.installed) return
  install.installed = true
  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName])
  })

  // Register Global event to show AppMessage, related to AppSnackbar
  // https://medium.com/@panzelva/writing-modals-for-vue-js-callable-from-anywhere-6994d180451
  this.EventBus = new Vue()
  Vue.prototype.$appMessage = {
    show (params) {
      plugin.EventBus.$emit('AppMessageShow', params)
    }
  }
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components/index'
