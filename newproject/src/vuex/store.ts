import actions from './actions'
import mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  vuexCount: 0,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
