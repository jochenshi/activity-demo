import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Home from '../pages/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
/*router.beforeEach((to, from, next) => {
  console.log(router.app)
  next()
})*/

export default router
