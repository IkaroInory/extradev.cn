<template>
    <div>
        <el-space fill direction="vertical">
            <ConventionalCommitDoc/>
        </el-space>
    </div>
</template>

<script>
    import ConventionalCommitDoc from "@/components/ConventionalCommitDoc";

    export default {
        name: "Documents",
        components: {ConventionalCommitDoc}
    }
</script>

<style scoped>

</style>