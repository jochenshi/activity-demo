import Vue from 'vue'
import Router from 'vue-router'

//import Hello from '@/components/Hello'
import Index from '../pages/index.vue'
import Home from '../pages/home/home.vue'
import Message from '../pages/message/message.vue'
import Personal from '../pages/personal/personal.vue'
import DetailActivity from '../pages/activity/detailActivity.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'message',
          name: 'message',
          component: Message
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path: '/detailActivity',
      name: 'detailActivity',
      component: DetailActivity
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
      /*children: [
        {
          path: '/activity',
          name: 'activity',
          component: ''
        }
      ]*/
    }/*,
    {
      path: '/message',
      name: 'message',
      component: ''
    },
    {
      path: '/personal',
      name: 'personal',
      component: ''
    }*/
  ]
})
/*router.beforeEach((to, from, next) => {
  console.log(router.app)
  next()
})*/

export default router
