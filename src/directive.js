const Directive = {
  // Check element in display area
  inViewScroll (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight)
  },

  bind (el, binding) {
    el.classList.add('no-active')
    el.$onScroll = () => {
      if (binding.def.inViewScroll(el)) {
        el.classList.add('active')
        el.classList.remove('no-active')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted (el, binding) {
    el.$onScroll()
  },

  unbind (el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
}

export default Directive