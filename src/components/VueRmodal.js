import component from './component.js'
export default {
  install(Vue, RModal) {
    if (!RModal) {
      console.error('You have to install rmodal')
      return
    }
    Vue.prototype.RModal = RModal
    Vue.prototype.$rmodal = {}
    Vue.component('VueRmodal', component)
  }
}
