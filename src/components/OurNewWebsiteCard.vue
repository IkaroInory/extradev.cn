<template>
    <el-card shadow="always">
        <h2>&#10024; {{ $t('component.ourNewWebsiteCard.title') }} &#10024;</h2>

        <div class="content">
            <span v-for="item in this.$i18n.getLocaleMessage(this.$i18n.locale).component.ourNewWebsiteCard.content">{{ item }}<br/></span>
        </div>
        <p class="footer">
            Extraordinary Development Team<br/>
            {{ $t('component.ourNewWebsiteCard.time') }}
        </p>
    </el-card>
</template>

<script>
    export default {
        name: "OurNewWebsiteCard"
    }
</script>

<style scoped>
    .content {
        text-align: left;
    }

    .footer {
        text-align: right;
    }
</style>
