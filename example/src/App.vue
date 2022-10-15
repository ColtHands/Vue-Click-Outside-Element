<template>
  <div class="with-directive" v-click-outside-element="testMethod">with directive</div>
  <div class="with-directive" v-if="show">without directive</div>
  <SomeComponent/>
</template>

<script>
import SomeComponent from './SomeComponent.vue'

export default {
    components: {
        SomeComponent
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        testMethod() {
            console.log('asd')
            this.show = !this.show
        }
    }
}
</script>