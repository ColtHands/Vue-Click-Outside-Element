import VueClickOutsideElement from './../dist/vue-click-outside-element.js'
import App from './App.vue'
import Vue from 'vue'

Vue.use(VueClickOutsideElement)

new Vue({
    el: '#app',
    components: {
        App
    }
})