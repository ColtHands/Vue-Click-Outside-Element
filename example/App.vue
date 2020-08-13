<template>
    <button v-click-outside-element="close" v-if="showButton">this button is showing, but if you click outside of it...</button>
</template>

<script>
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

