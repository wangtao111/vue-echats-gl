<template>
    <div id="wrapper">
        <ul id="left_list" class="list_style" @drop="drop($event)" @dragover="allowDrop($event)">
            <li v-for="item in dragList" draggable="true" @dragstart="drag($event)">
                {{item.num}} 、 {{item.name}}
            </li>
        </ul>
        <ul id="right_list" class="list_style" @drop="drop($event)" @dragover="allowDrop($event)">
        </ul>
        {{$store.state.count}}
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Button, Select} from 'element-ui'

    Vue.use(Button);
    Vue.use(Select);
    let dom = null;
    export default {
        name: 'app',
        components: {},
        data() {
            return {
                dragList: [
                    {num: 1, name: '张三'},
                    {num: 2, name: '李四'},
                    {num: 3, name: '王二'},
                    {num: 4, name: '赵四'}
                ]
            }
        },
        mounted() {

        },
        methods: {
            allowDrop(ev) {
                ev.preventDefault();
            },
            drag(event) {
                dom = event.currentTarget
            },
            drop(ev) {
                ev.preventDefault();
                if (ev.target.id === 'left_list' || ev.target.id === 'right_list') {
                    ev.target.appendChild(dom);
                }
            }
        }
    }
</script>

<style lang="less" type="text/less">
    .list_style {
        width: 150px;
        height: 300px;
        border: 1px solid #111;
        float: left;
        margin-right: 50px;
    }

    .list_style > li {
        width: 80px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        border-radius: 3px;

        margin-top: 10px;
        padding: 10px;
        background: #2a8ed2;
        color: #fff;
        border: 1px solid #3a4854;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: '黑体' !important;
        font-weight: normal;
        background: white !important;
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
