# `vue-click-outside-element` | `v-click-outside-element`
This is a simple very small directive to detect clicks ouside **element** _not component_ on which this directive applied. For clicking outside **component** check [Vue-Click-Outside-Component](https://github.com/ColdHandz/Vue-Click-Outside-Component)

## Install
* For Vue 3 `npm i vue-click-outside-element`
* For Vue 2 `npm i vue-click-outside-element@1.0.15`

**NOTE**: _Vue 3 version of this directive is better typed and way better tested_

## Usage

Apply like basic directive.

It accepts only functions that are present inside `methods` object.

`<div v-click-outside-element="someRandomFunction">Hello World</div>`

## Example

```js
// main.js
import vueClickOutsideElement from 'vue-click-outside-element'

const app = createApp(App)

app.use(vueClickOutsideElement)
app.mount('#app')
```

```vue
<!-- App.vue -->
<template>
    <button v-click-outside-element="close" v-if="showButton">showing</button>
</template>

<script>
export default {
    data() {
        return { showButton: true }
    },
    methods: {
        close(el){
            this.showButton = false
        }
    }
}
</script>
```

## Contrib

* Submit issue, any bugs, issues features are accepted.
* Clone, pull, play with example, test, submit merge request

## Roadmap

* Combining `click outside element` and `click outside component` in one package
* Introduce more tests
