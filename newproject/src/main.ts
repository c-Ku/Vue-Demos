import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Vue from 'vue'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI, {
  Button,
  Cascader,
  Option,
  Select,
  Switch,
  Slider,
} from 'element-ui'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Vue.config.productionTip = false

Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Cascader)
Vue.use(Slider)
Vue.use(Vuex)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
