export default {
  name: 'VueRmodal',
  render(h) {
    return h(
      'div',
      {
        style: {
          display: 'none'
        },
        directives: [
          {
            name: 'rmodal',
            value: {
              name: this.name,
              setting: this.setting,
              $rmodal: this.$rmodal,
              RModal: this.RModal
            }
          }
        ]
      },
      this.$slots.default
    )
  },
  directives: {
    rmodal: {
      bind(el, { value: {name, setting, $rmodal, RModal} }) {
        const modal = new RModal(el, setting)
        $rmodal[name] = modal
      },
      unbind(_, { value: {name} }) {
        delete value.$rmodal[name]
      }
    }
  },
  props: {
    setting: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      required: true
    }
  }
}
