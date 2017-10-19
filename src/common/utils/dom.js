const addClass = (el, cls) => {
  if (!el) return;
  var classes = (cls || '').split(' ');
  for (var i = 0; i < classes.length; i++) {
    var temp = classes[i];
    if (!temp) continue;
    el.classList.add(temp);
  }
}

const hasClass = (el, cls) => {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('class show not contain space');
  if (el.classList.length > 0) {
    return el.classList.contains(cls);
  } else {
    return false;
  }
}

const removeClass = (el, cls) => {
  if (!el || !cls) return;
  var classes = cls.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i]) continue;
    if (el.classList.length > 0) {
      el.classList.remove(classes[i]);
    }
  }
}

export {addClass, hasClass, removeClass}
