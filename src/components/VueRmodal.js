import comp from './VueRmodal.vue'
let VueRmodal = {}
VueRmodal.install = function(Vue, Rmodal) {
  Vue.component('VueRmodal', comp)
}

export default VueRmodal