<template>
    <div class="container">
        <router-link to="/locale/set?locale=en_us">English - United States</router-link>
        <br/>
        <router-link to="/locale/set?locale=zh_cn">简体中文 - 中国大陆</router-link>
        <br/>
        <router-link to="/locale/set?locale=zh_tw">繁體中文 - 中國香港特別行政區</router-link>
    </div>
</template>

<script>
    export default {
        name: "Locale"
    }
</script>

<style scoped>
    .container {
        line-height: 32px;
    }
</style>
