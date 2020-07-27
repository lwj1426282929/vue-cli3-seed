import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import './icons'
import * as enums from './utils/enum'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.filter('enum', function(objName, key, value) {
  const obj = enums[objName]
  if (value !== undefined) {
    for (let k in obj) {
      if (obj[k] === value) return k
    }
  }
  return obj[key]
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
