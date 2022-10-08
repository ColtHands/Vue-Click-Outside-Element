<template>
  <div class="with-directive" v-click-outside-element="testMethod">with-directive</div>
  <div class="with-directive" v-click-outside-element="() => {}">with-directive</div>
  <div class="without-directive">without-directive</div>
</template>

<script>
export default {
    methods: {
        testMethod() {
            console.log('asd')
        }
    }
}
</script>