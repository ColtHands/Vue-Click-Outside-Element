# `vue-click-outside-element`
This is a simple very small directive to detect clicks ouside **element** _not component_ on which this directive applied.

For clickin outside **component** check [Vue-Click-Outside-Component](https://github.com/ColdHandz/Vue-Click-Outside-Component)

or search npm for `vue-click-outside-component`

## Install

`npm i vue-click-outside-element`

or

`yarn add vue-click-outside-element`

## Usage

Apply like basic directive.

It accepts only functions that are present inside `methods` object.

`<div v-click-outside-element="someRandomFunction">Hello World</div>`

## Example

_App.vue_
```
<template>
    <button v-click-outside-element="close" v-if="showButton">showing</button>
</template>

<script>
import Vue from 'vue'
import VueClickOutsideElement from 'VueClickOutsideElement'

Vue.use(VueClickOutsideElement)

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

* More tests with usability and browser compatibility
* Strong typing with typescript
* Supporting and tesing with `Vue 3`
* Add CodeSandbox playground
