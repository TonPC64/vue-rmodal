<template>
  <div>
    <a @click="$rmodal.ModalName.open()" id="showModal" class="btn btn-success">Show modal</a>

    <vue-rmodal name="ModalName" :setting="setting">
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
              <button class="btn btn-default" type="button" @click="$rmodal['ModalName'].close();">Cancel</button>
              <button class="btn btn-primary" type="submit" @click="$rmodal['ModalName'].close();">Save</button>
            </div>
          </form>
        </div>
      </div>
    </vue-rmodal>

  </div>
</template>

<script>
export default {
  name: 'Example',
  data () {
    return {
      setting: {
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
}
</script>

