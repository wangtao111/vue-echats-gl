<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'app',
        components: {
        },
        data() {
            return {
            }
        },
        mounted() {
            this.$api.decision.caseCauseTags.request({id: '1eaef7c14597470438fa58f7ac8efcd1', username: 'jsgy'}).then(({ data }) => {
                console.log(data);
            });
        },
        methods: {
        }
    }
</script>

<style lang="less" type="text/less">
    @import "common";
</style>
