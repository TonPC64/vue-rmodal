import Vue from 'vue'
import App from './App.vue'
import VueRmodal from './components/VueRmodal.js'

Vue.use(VueRmodal)

new Vue({
  el: '#app',
  render: h => h(App)
})
