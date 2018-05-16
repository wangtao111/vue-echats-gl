<template>
    <div class="time_line_content">
        <p class="time_line_title">时间轴</p>
    </div>
</template>

<script>
    export default {
        name: "time-line",
        components: {},
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less" type="text/less" scoped>
    .time_line_content{
        width: 46rem;
        height: 220px;
        position: relative;
        top:40px;
        left: 3rem;
        .time_line_title{
            padding-left: 1rem;
            font-size: 16px;
            color: #d7d122;
            width: 6rem;
            border-right: 3px solid #d7d122;
        }
    }
</style>