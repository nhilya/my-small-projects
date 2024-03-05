<template>
    <h1>Home component</h1>
    <input type="text" v-model.lazy="count">
    <h2>Number : {{ count }}</h2>
</template>

<script>
export default {
    name: 'MainHome'
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>