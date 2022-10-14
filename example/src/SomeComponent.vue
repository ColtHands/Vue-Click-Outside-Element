<template>
    <hr/>
    <div v-if="show">some component</div>
    <div class="with-directive" v-click-outside-element="testMethod">with directive</div>
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
            console.log('asd')
            this.show = !this.show
        }
    }
}
</script>