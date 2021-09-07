const getParentById = (el, id) => {
  let parent = el
  while (parent) {
    if (parent == null || parent.id == null) {
      parent = el
      break
    }
    if (parent.id === id) {
      break
    }
    parent = parent.parentNode
  }
  return parent
}

const defaultOptions = {
  noActive: 'no-active',
  active: 'active',
  delay: 0,
  offset: 0,
  parentId: null,
  alternate: false
}

export default {
  defaultOptions,

  // Check item in the display area
  inViewScroll (el, options) {
    const rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight - options.offset)
  },

  bind (el, binding) {
    // Default schema options
    let options = Object.assign({}, defaultOptions)

    // Assign default options and element options
    options = Object.assign(options, binding.value)

    // Add no-active class to element
    el.classList.add(options.noActive)

    el.$onScroll = () => {
      const targetElement = options.parentId ? getParentById(el, options.parentId) : el

      if (binding.def.inViewScroll(targetElement, options)) {
        // Delay add class
        setTimeout(() => {
          const classList = options.active.split(' ')
          classList.forEach(val => {
            el.classList.add(val)
          })
          el.classList.remove(options.noActive)
        }, options.delay)

        // Unbinding event
        if (!options.alternate) {
          binding.def.unbind(el, binding)
        }
      } else if (options.alternate && !el.classList.contains(options.noActive)) {
        const classList = options.active.split(' ')
        classList.forEach(val => {
          el.classList.remove(val)
        })
        el.classList.add(options.noActive)
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