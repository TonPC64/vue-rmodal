import Vue from 'vue'
import App from './App.vue'
import VueRmodal from './components/VueRmodal.js'
import RModal from 'rmodal/src/rmodal.js'

Vue.use(VueRmodal, RModal)

new Vue({
  el: '#app',
  render: h => h(App)
})
