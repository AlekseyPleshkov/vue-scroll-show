export default {
  // Check item in the display area
  inViewScroll (el) {
    const rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight)
  },

  bind (el, binding) {
    // Default schema options
    let options = {
      active: 'active',
      delay: 0,
      selector: null
    }

    // Assign default options and element options
    options = Object.assign(options, binding.value)
    
    // Add no-active class to element
    el.classList.add('no-active')

    el.$onScroll = () => {
      const checkSelector = options.selector && typeof window !== 'undefined' && window.Vue
      const targetElement = checkSelector ? document.querySelector(options.selector) : el

      if (binding.def.inViewScroll(targetElement)) {
        // Delay add class
        setTimeout(() => {
          const classList = options.active.split(' ')
          classList.forEach(val => {
            el.classList.add(val)
          })
          el.classList.remove('no-active')
        }, options.delay)

        // Unbinding event
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