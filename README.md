# vue-rmodal

> A simple 1.2 KB modal dialog with no external dependencies

[rmodal.js](https://github.com/zewish/rmodal.js)

## Installation

```sh
yarn add vue-rmodal rmodal
```

```js
import VueRmodal from 'vue-rmodal'
import RModal from 'rmodal/src/rmodal.js'

Vue.use(VueRmodal, RModal)

```

## Usage

```html
<!-- use bootstrap AND animate.css -->
<link rel="stylesheet" href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://unpkg.com/animate.css@3.5.2/animate.css" type="text/css" />

<!-- just write child html in component -->
<div>
  <a @click="$rmodal.testModal.open()" id="showModal" class="btn btn-success">Show modal</a>

  <vue-rmodal name="ModalName" :setting="setting">
    <!-- write modal here -->
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
            <button class="btn btn-default" type="button" @click="$rmodal['testModal'].close();">Cancel</button>
            <button class="btn btn-primary" type="submit" @click="$rmodal['testModal'].close();">Save</button>
          </div>
        </form>
      </div>
    </div>
  </vue-rmodal>

</div>
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
