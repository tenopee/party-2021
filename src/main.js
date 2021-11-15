import Vue from 'vue'
import 'es6-promise/auto'
import App from './App'

Vue.config.productionTip = true

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})
vm.$mount()
