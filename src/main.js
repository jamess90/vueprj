// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import CommonCss from './mobile/css/common.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  CommonCss,
  // $,
  render: h => h(App),
  router
})
