import HelloWorld from '@/components/HelloWorld.vue'
import Page from '@/components/Page.vue'
import Props from '@/components/Props.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/Page',
      name: 'Page',
      component: Page,
    },
    {
      path: '/Props/:id',
      name: 'Props',
      component: Props,
    },
  ],
})
