// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//适配必须 这里要在index.html多写一行
import './assets/js/response'
import './assets/main.less'
import 'less'
import 'less-loader'
import router from './router'
import store from './test-vuex/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
