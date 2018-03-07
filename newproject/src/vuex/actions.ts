import store from './store'

export default {
  increment() {
    store.commit('increment')
  },
  decrement() {
    store.commit('decrement')
  },
}
