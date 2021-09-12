import Directive from './directive.js'

const VueScrollShow = {
  install (Vue, options = {}) {
    Object.assign(Directive.defaultOptions, options)
    Vue.directive('scroll-show', Directive)
  }
}

export default VueScrollShow

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueScrollShow)
}
