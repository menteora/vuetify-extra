# vuetify-extra
Vue library with common used components based on Vuetify.

Demo here: https://menteora.github.io/vuetify-extra/


## Project setup
### Install Library
- Install Vuetify 2 ([see documentation](https://vuetifyjs.com/en/getting-started/quick-start))
- Install Vuetify Extra:

```
npm install @menteora/vuetify-extra
```

### Use Plugin

- Use Vuetify-Extra plugin after Vuetify
- Example of `/src/main.js` with Vuetify and Vuetify-Extra plugins:

```javascript
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/vuetify-extra'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
```

- Example of standard Vuetify plugin installation in `plugins/vuetify.js`:

```javascript
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
```

- Example Vuetify-Extra plugin installation in `plugins/vuetify-extra.js`:

```javascript
import Vue from 'vue'
import VuetifyExtra from '@menteora/vuetify-extra'
import '@menteora/vuetify-extra/dist/menteora.css'

Vue.use(VuetifyExtra)
```

## Project setup

### See demo in action:
```
npm run serve
```

### Compiles and minifies Library for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Update workflow

1. Update & commit code

### Github pages updates
2. Update demo `deploy:demo`
3. Test demo

### Github updates
4. Update release inside package.json
5. Tag commit `git tag v0.3.1`
6. Push Tags `git push origin --tags`

### Npm updates
7. Update build `npm run build`
8. Login on npm `npm login`
8. Update package on npm `npm publish`
