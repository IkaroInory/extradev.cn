<template>
    <div>
        <h1>{{ $t('view.welcomeToExtraordinaryDevelopmentTeam') }}</h1>
        <el-space fill direction="vertical">
            <OurNewWebsiteCard/>
        </el-space>
    </div>
</template>

<script>
    import OurNewWebsiteCard from "@/components/OurNewWebsiteCard";

    export default {
        name: "Home",
        components: {OurNewWebsiteCard},
        mounted() {
        }
    }
</script>

<style scoped>

</style>
