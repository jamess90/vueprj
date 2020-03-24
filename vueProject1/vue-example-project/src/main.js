// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  $,
  render: h => h(App)
})