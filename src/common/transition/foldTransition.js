class Transition {
  beforeEnter (el) {}
  enter (el) {}
  afterEnter (el) {}
  beforeLeave (el) {}
  leave (el) {}
  afterLeave (el) {}
}

export default {
  name: 'SFoldTransition',
  render (h, {children}) {
    return h('transition', {on: new Transition()}, children)
  }
}
