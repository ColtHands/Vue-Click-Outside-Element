<template>
    <button v-click-outside-element="close" v-if="showButton">showing</button>
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

