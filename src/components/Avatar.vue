<template>
    <div style="display: flex">
        <div style="float: left">
            <el-avatar :size="50">
                <slot/>
            </el-avatar>
        </div>
        <div style="display: block;margin-left: 8px">
            <div style="height: 50%;padding-top: 4px">
                <span>{{ author }}</span>
            </div>
            <div style="height: 50%;font-size: 13px;color: #969696">
                <span>{{ time }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props: {
            author: String,
            time: String
        }
    }
</script>

<style scoped>

</style>