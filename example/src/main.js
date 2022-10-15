import { createApp } from 'vue'
import App from './App.vue'
import vueClickOutsideElement from './../../dist/vue-click-outside-element.js'

const app = createApp(App)

app.use(vueClickOutsideElement)
app.mount('#app')