// Import vue components
import * as components from './components/index'

// install function executed by Vue.use()
function install (Vue) {
  if (install.installed) return
  install.installed = true
  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName])
  })
  /*
  Vue.mixin({
    data () {
      return { appMessage: '' }
    },
    methods: {
       sayHello: function () {
        console.log('hello from mixin!')
      },

      setAppMessage (value) {
        this.appMessage = value
      },
      getAppMessage () {
        console.log(this.appMessage)
      }//,
      // setAppMessage(value) {
      //  this.$appMessage = value
      //  console.log(this.$appMessage)
      // }
    }/*,
    mounted() {
      this.sayHello()
      this.setAppMessage('filippa')
      this.setGlobalMessage('ammazzati')
      this.getGlobalMessage()
    }
  }) */
  this.EventBus = new Vue()
  Vue.prototype.$appMessage = {
    show (params) {
      // if we use this.$modal.show(params) inside our original Vue instance
      // we will emit 'show' event with parameters 'params'
      plugin.EventBus.$emit('appMessageShow', params)
    }
  }

  // Vue.prototype.$appMessage = ''
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
