// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import router from './router'
import KitDoc from '../'

import 'nprogress/nprogress.css';

Vue.use(Router)
Vue.use(KitDoc)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: (h) => h(App),

  // template: '<App/>',
  // components: { App }
})
