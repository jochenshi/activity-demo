import {addClass, removeClass} from '../utils/dom'

var a = function () {
  return {
    beforeEnter (el) {
      addClass(el, 'fold_transition');
      if (!el.dataset) {
        el.dataset = {};
      }
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    enter (el) {
      el.dataset.overflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.paddingTop;
        el.style.paddingBottom = el.dataset.paddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.paddingTop;
        el.style.paddingBottom = el.dataset.paddingBottom;
      }
      el.style.overflow = 'hidden';
    },
    afterEnter (el) {
      removeClass(el, 'fold_transition');
      el.style.height = '';
      el.style.overflow = el.dataset.overflow;
    },
    beforeLeave (el) {
      if (!el.dataset) {
        el.dataset = {};
      }
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.overflow = el.style.overflow;
      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
    },
    leave (el) {
      if (el.scrollHeight !== 0) {
        addClass(el, 'fold_transition');
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },
    afterLeave (el) {
      removeClass(el, 'fold_transition');
      el.style.height = '';
      el.style.overflow = el.dataset.overflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }
}
/*class Transition {
  beforeEnter (el) {
    addClass(el, 'fold_transition');
    if (!el.dataset) {
      el.dataset = {};
    }
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  }
  enter (el) {
    el.dataset.overflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.paddingTop;
      el.style.paddingBottom = el.dataset.paddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.paddingTop;
      el.style.paddingBottom = el.dataset.paddingBottom;
    }
    el.style.overflow = 'hidden';
  }
  afterEnter (el) {
    //removeClass(el, 'fold_transition');
    el.style.height = '';
    el.style.overflow = el.dataset.overflow;
  }
  beforeLeave (el) {
    if (!el.dataset) {
      el.dataset = {};
    }
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.overflow = el.style.overflow;
    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  }
  leave (el) {
    if (el.scrollHeight !== 0) {
      addClass(el, 'fold_transition');
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  }
  afterLeave (el) {
    //removeClass(el, 'fold_transition');
    el.style.height = '';
    el.style.overflow = el.dataset.overflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
}*/

export default {
  name: 'SFoldTransition',
  functional: true,
  render (h, { children }) {
    console.log('load transition')
    const data = {
      on: a()
    };
    return h('transition', data, children)
  }
}
