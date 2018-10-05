# Vue Scroll Show

Showing the element if the user reached it after scroll

## Installation

```js
npm i --save-dev vue-scroll-show
```

```js
import VueScrollShow from 'vue-scroll-show'

Vue.use(VueScrollShow)
```

## Usage

```html
<element v-scroll-show></element>
```

or with options

```html
<element v-scroll-show='{active: "show fadeIn", delay: 500, selector: "#id"}'>Show one from selector</element>
<element v-scroll-show='{active: "show fadeIn"}'>Show one from selector</element>
```

## Directive options

| Option | Description |
| ------ | ------ |
| active | Add classes if element in display area |
| delay | Timeout to add classes to element |
| selector | Id or class name element for starting add classes to directive elements |