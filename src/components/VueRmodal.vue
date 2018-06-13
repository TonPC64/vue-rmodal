<template>
  <div>
    <div id="modal" class="modal">
      <div class="modal-dialog animated">
        <div class="modal-content">
          <form class="form-horizontal" method="get">
            <div class="modal-header">
              <strong>Yep, I'm a dialog...</strong>
            </div>

            <div class="modal-body">
              <div class="form-group">
                <label for="dummyText" class="control-label col-xs-4">Dummy text</label>
                <div class="input-group col-xs-7">
                  <input type="text" name="dummyText" id="dummyText" class="form-control" />
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button class="btn btn-default" type="button" onclick="modal.close();">Cancel</button>
              <button class="btn btn-primary" type="submit" onclick="modal.close();">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <a href="#" id="showModal" class="btn btn-success">Show modal</a>
  </div>
</template>

<script>
import RModal from 'rmodal/src/rmodal.js';
export default {
  name: 'rmodal',
  mounted () {
    var modal = new RModal(document.getElementById('modal'), {
        //content: 'Abracadabra'
        beforeOpen: function(next) {
            console.log('beforeOpen');
            next();
        }
        , afterOpen: function() {
            console.log('opened');
        }

        , beforeClose: function(next) {
            console.log('beforeClose');
            next();
        }
        , afterClose: function() {
            console.log('closed');
        }
        // , bodyClass: 'modal-open'
        // , dialogClass: 'modal-dialog'
        // , dialogOpenClass: 'animated fadeIn'
        // , dialogCloseClass: 'animated fadeOut'

        // , focus: true
        // , focusElements: ['input.form-control', 'textarea', 'button.btn-primary']

        // , escapeClose: true
    });

    document.addEventListener('keydown', function(ev) {
        modal.keydown(ev);
    }, false);

    document.getElementById('showModal').addEventListener("click", function(ev) {
        ev.preventDefault();
        modal.open();
    }, false);

    window.modal = modal;
  }
}
</script>