# `v-click-cutside-element`
This is a simple directive to detect clicks ouside element this directive applied

## Install

`npm i v-click-cutside-element`
or
`yarn add v-click-cutside-element`

## Usage

_App.vue_
```
<template>
    <button v-click-outside-element="close" v-if="showButton">showing</button>
</template>

<script>
import VueClickOutsideElement from 'VueClickOutsideElement'

Vue.use(VueClickOutsideElement)

export default {
    data() {
        return { showButton: true }
    },
    methods: {
        close(e){
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


