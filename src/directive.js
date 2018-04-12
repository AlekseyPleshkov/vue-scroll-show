const Directive = {
  // Check item - is it in the display area
  inViewScroll (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight)
  },

  bind (el, binding) {
    let options = {
      // Add classes after show
      active: 'active'
    }

    options = Object.assign(options, binding.value)

    el.classList.add('no-active')
    el.$onScroll = () => {
      if (binding.def.inViewScroll(el)) {
        let classList = options.active.split(' ')
        classList.forEach((val) => {
          el.classList.add(val)
        })
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