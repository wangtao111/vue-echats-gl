<template>
    <div class="page_content">
        <!--<div class="nav"></div>-->
        <div class="section">
            <div class="left_item">
                <country-list :list="countryList" @chooseMap="chooseMap" ref="countryListObj"></country-list>
            </div>
            <div class="main">
                <div class="map_content">
                    <main-map ref="mainMap" @hoverMove="hoverMove"></main-map>
                </div>
                <div class="time_line">
                    <time-line></time-line>
                </div>
            </div>
            <div class="right_item">
                <real-time-event :realTime="realTimeEvent"></real-time-event>
                <real-time-event :realTime="realTimeStatus"></real-time-event>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Button, Select} from 'element-ui';
    import MainMap from './mainMap/mainMap';
    import CountryList from './countryList/countryList';
    import RealTimeEvent from './realTimeEvent/realTimeEvent';
    import TimeLine from './timeLine/timeLine';
    Vue.use(Button);
    Vue.use(Select);
    export default {
        name: 'app',
        components: {
            MainMap,
            CountryList,
            RealTimeEvent,
            TimeLine
        },
        data() {
            return {
                countryList: [{name: '世界', val: 'world'}, {name: '中国', val: 'china'}, {name: '日本', val: 'japan'}, {name: '美国'}, {name: '台湾'}, {name: '越南'}, {name: '印度'}, {name: '欧洲'}, {name: '叙利亚'}],
                mainMap: null,
                realTimeStatus: {
                    title: '实时状态',
                    name: '状态',
                    realTimelist: [{name: '事件1111111111111', status: '正常'}, {name: '事件1111111111111', status: '故障'}, {name: '事件1111111111111', status: '正常'}, {name: '事件1111111111111', status: '警报'}, {name: '事件1111111111111', status: '正常'}]
                },
                realTimeEvent: {
                    event: true,
                    title: '实时事件',
                    name: '概率',
                    realTimelist: [{name: '事件1111111111111', status: '88%'}, {name: '事件1111111111111', status: '90%'}, {name: '事件1111111111111', status: '80%'}, {name: '事件1111111111111', status: '85%'}, {name: '事件1111111111111', status: '60%'}]
                },
                countryListObj: null
            }
        },
        mounted() {
        },
        methods: {
            chooseMap(name) {
                this.$refs.mainMap.drawMap(name);
            },
            hoverMove(name) {
                this.$refs.countryListObj.hoverMove(name);
            }
        }
    }
</script>
<style lang="less" type="text/less" scoped>
    @import "mainPage";
</style>
