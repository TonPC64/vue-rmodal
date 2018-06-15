(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueRmodal = factory());
}(this, (function () { 'use strict';

  var component = {
    name: 'VueRmodal',
    render: function render(h) {
      return h('div', {
        style: {
          display: 'none'
        },
        directives: [{
          name: 'rmodal',
          value: {
            name: this.name,
            setting: this.setting,
            $rmodal: this.$rmodal,
            RModal: this.RModal
          }
        }]
      }, this.$slots.default);
    },
    directives: {
      rmodal: {
        bind: function bind(el, _ref) {
          var _ref$value = _ref.value,
              name = _ref$value.name,
              setting = _ref$value.setting,
              $rmodal = _ref$value.$rmodal,
              RModal = _ref$value.RModal;
          var modal = new RModal(el, setting);
          $rmodal[name] = modal;
        },
        unbind: function unbind(_, _ref2) {
          var name = _ref2.value.name;
          delete value.$rmodal[name];
        }
      }
    },
    props: {
      setting: {
        type: Object,
        default: function _default() {}
      },
      name: {
        type: String,
        required: true
      }
    }
  };

  var VueRmodal = {
    install: function install(Vue, RModal) {
      if (!RModal) {
        console.error('You have to install rmodal');
        return;
      }

      Vue.prototype.RModal = RModal;
      Vue.prototype.$rmodal = {};
      Vue.component('VueRmodal', component);
    }
  };

  return VueRmodal;

})));
