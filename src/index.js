import Directive from './directive.js'

var VueScrollShow = {
  install: (Vue, options) => {
    Vue.directive('scroll-show', Directive)
  }
}

export default VueScrollShow

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueScrollShow)
}
