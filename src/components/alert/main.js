import Vue from 'vue'
import AlertBox from './alertBox.vue'

let AlertConstructor = Vue.extend(AlertBox);

let SAlertBox = function (options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let instance = new AlertConstructor({
    data: options
  })
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  return instance.vm;
}

export default SAlertBox
