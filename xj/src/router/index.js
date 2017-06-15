/**
 * Created by zhengjinwen on 2017/6/15.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/test',
      name:'test',
      component:Test
    }
  ]
})
