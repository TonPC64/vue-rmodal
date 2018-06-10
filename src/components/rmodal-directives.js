import RModal from 'rmodal/src/rmodal'
let options = {
  content: 'This may be used to override all of the dialog inner html',
  closeTimeout: 500, // Time to wait (ms) before afterClose() is called

  /**
   * Callbacks
   */
  beforeOpen: function(next) {
    console.log('I will execute right before the dialog is shown')
    next()
  },
  afterOpen: function() {
    console.log('I will execute just after the dialog is shown')
  },
  beforeClose: function(next) {
    console.log('I will execute right before the dialog is closed')
    next()
  },
  afterClose: function() {
    console.log('I will execute just after the dialog is closed')
  },

  /**
   * Classes
   */

  // Added to body element clases while the modal is opened:
  bodyClass: 'modal-open',

  // Always added to dialog element classes:
  dialogClass: 'modal-dialog modal-dialog-lg',

  // Added to dialog element classes after it is opened:
  dialogOpenClass: 'animated fadeIn',

  // Added to dialog element classes before it is closed:
  dialogCloseClass: 'animated fadeOut',

  /**
   * Focus
   */

  // Set this to "false" to disable focus capture (tab/shift+tab):
  focus: true,

  // Set this to "false" to disable closing when escape key pressed:
  escapeClose: true
}
export default {
  bind(el) {
    // let modal = new RModal(el, options)
    // document.addEventListener(
    //   'keydown',
    //   function(ev) {
    //     modal.keydown(ev)
    //   },
    //   false
    // )
    // document.getElementById('showModal').addEventListener(
    //   'click',
    //   function(ev) {
    //     ev.preventDefault()
    //     modal.open()
    //   },
    //   false
    // )
    // window.modal = modal
  }
}
