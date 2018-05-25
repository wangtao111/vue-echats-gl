<template>
    <div class="real_time_event">
        <div class="real_time_event_content">
            <p class="real_time_title">{{realTime.title}}</p>
            <ul class="real_time_item">
                <li><span>事件名称</span><span>{{realTime.name}}</span></li>
                <li v-for="(item,index) in realTime.realTimelist" :style="{background: index % 2 === 0 ? '#091629': '#030917'}">
                    <span><a>{{item.name}}</a></span>
                    <span v-if="item.status === '正常'" style="color: #10d904">{{item.status}}</span>
                    <span v-if="item.status === '故障'" style="color: #df6e08">{{item.status}}</span>
                    <span v-if="item.status === '警报'" style="color: #f10102">{{item.status}}</span>
                    <span v-if="realTime.event">{{item.status}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "real-time-event",
        components: {},
        props: ['realTime'],
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less" type="text/less" scoped>
    @import "realTimeEvent";
</style>