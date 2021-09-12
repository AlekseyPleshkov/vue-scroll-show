# Vue Scroll Show

Showing the element if the user reached it after scroll

## Installation

```js
npm i --save-dev vue-scroll-show
```

```js
import VueScrollShow from 'vue-scroll-show'

Vue.use(VueScrollShow, defaultOptions)
```

#### SSR (Nuxt.js)

```js
import VueScrollShow from 'vue-scroll-show/dist/ssr.index'

Vue.use(VueScrollShow, defaultOptions)
```

## Usage

```html
<element v-scroll-show></element>
```

or with options

```html
<div id='event'>
  <span v-scroll-show='{active: "show fadeIn", delay: 500, parentId: "event"}'>Show one from parentId</span>
  <span v-scroll-show='{active: "show fadeIn", delay: 1000, parentId: "event"}'>Show two from parentId</span>
</div>
<span v-scroll-show='{active: "show fadeIn"}'>Show three without parentId</span>
<span v-scroll-show='{active: "show fadeIn", offset: 500}'>Show four with offset 500</span>
```

## Directive options

| Option | Description |
| ------ | ------ |
| noActive | Add classes if element not in display area |
| active | Add classes if element in display area |
| delay | Timeout to add classes to element |
| offset | Screen offset to add class to element |
| parentId | Id parent element for starting add classes to directive elements |
| alternate | If remove active class and add noActive class if element not in display area |