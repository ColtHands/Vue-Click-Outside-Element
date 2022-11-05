import { createApp } from 'vue'
import App from './App.vue'
import vueClickOutsideElement from './../dist/vue-click-outside-element.mjs'

const app = createApp(App)

app.use(vueClickOutsideElement, 'click-out')
app.mount('#app')