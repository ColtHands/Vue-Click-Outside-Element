<template>
  <div class="with-directive" v-click-out="testMethod" v-if="show">with directive</div>
  <div class="with-directive">without directive</div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        testMethod() {
            this.show = !this.show
        }
    }
}
</script>