<template/>

<script>
    import Environment from "@/api/environment";
    import {ElMessage} from "element-plus";

    export default {
        name: "LocaleSet",
        mounted() {
            if (Object.keys(this.$route.query).length === 1) {
                if ('locale' in this.$route.query) {
                    if (Environment.setLanguage(this.$route.query['locale'])) {
                        this.$router.push({name: 'home'});
                    } else {
                        ElMessage.error(this.$t('message.error.unknownLocale'));
                        this.$router.push({name: 'locale'});
                    }
                }
            }
        }
    }
</script>
