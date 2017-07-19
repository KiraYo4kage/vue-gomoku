import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Layout' }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
