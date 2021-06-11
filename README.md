# IMPORTANT!

There's a **BUG** in **v1.0.0-beta.0**, use previous version:

```
npm install  @menteora/vuetify-extra@0.3.2
```

# vuetify-extra
Vue library with common used components based on Vuetify.

Demo here: https://menteora.github.io/vuetify-extra/

2020/12/18 - v1.0.0-beta.0 - reduced library size from 300kb to 9kb (removed any duplicated vuetify code)

2020/11/03 - [**NEW!** Docker Integration](#Docker-Integration)

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

Vue.use(VuetifyExtra)
```

## Docker Integration
- Install Docker (refer to official Guide)
- Install "Docker" Extension on VSCode
- Open Folder with VSCode
- Answer "Reopen in Container" 

![reopen inside docker button](docs/reopen-inside-docker.png)

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
2. Update demo `npm run deploy:demo`
3. Test demo

### Github updates
4. Update release inside package.json
5. Tag commit `git tag v0.3.1`
6. Push Tags `git push origin --tags`

### Npm updates
7. Update build `npm run build`
8. Login on npm `npm login`
8. Update package on npm `npm publish`
