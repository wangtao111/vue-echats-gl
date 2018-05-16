<template>
    <div class="real_time_event">
        <div class="real_time_event_content">
            <p class="real_time_title">{{title}}</p>
            <ul class="real_time_item">
                <li v-for="item in realTimelist"><a>{{item.name}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "real-time-event",
        components: {},
        props: ['title', 'realTimelist'],
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less" type="text/less" scoped>
    .real_time_event{
        width: 100%;
        height: 501px;
        background: url("../../../image/main_right.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        .real_time_event_content{
            width: 15rem;
            height: 420px;
            position: absolute;
            top: 50px;
            left: 1rem;
            .real_time_title{
                padding-left: 1rem;
                font-size: 16px;
                color: #d7d122;
                width: 6rem;
                border-right: 3px solid #d7d122;
            }
            .real_time_item{
                margin-top: 15px;
                width: 100%;
                overflow: auto;
                >li{
                    width: 13rem;
                    height: 24px;
                    line-height: 24px;
                    font-size: 14px;
                    text-decoration: underline;
                    color: #4dbfe8;
                    background: #38416c;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    padding: 0 1rem;
                    cursor: pointer;
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>