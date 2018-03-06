import App from './App.vue'
import ElementUI, { Button, Option, Select, Switch } from 'element-ui'
import router from './router'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
