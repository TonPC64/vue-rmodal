<template>
  <div>
    <div id="modal" class="modal" v-rmodal="{setting}">
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

    <a @click="showModal" id="showModal" class="btn btn-success">Show modal</a>
  </div>
</template>

<script>
import RModal from 'rmodal/src/rmodal.js';
export default {
  name: 'rmodal',
  directives: {
    rmodal: {
      bind (el, {value}) {
        console.log()
        const setting = value.setting
        var modal = new RModal(el, setting)
        window.modal = modal;
      }
    }
  },
  methods: {
    showModal() {
      window.modal.open()
    }
  },
  computed: {
    setting () {
      return {
          beforeOpen: function(next) {
              console.log('beforeOpen')
              next()
          },
          afterOpen: function() {
              console.log('opened');
          },
          beforeClose: function(next) {
              console.log('beforeClose');
              next();
          },
          afterClose: function() {
              console.log('closed');
          }
        }
    }
  },
  mounted () {
    var el = document.getElementById('modal')
  }
}
</script>