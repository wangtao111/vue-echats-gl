<template>
    <div>
        <ul class="country_list">
            <li v-for="item in list">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "country-list",
        components: {},
        props: ['list'],
        data() {
            return {
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less" type="text/less" scoped>
    .country_list{
        width: 16rem;
        height: 950px;
        margin-left: 1.5rem;
        margin-top: 60px;
        overflow: auto;
        >li{
            width: 16rem;
            height: 50px;
            line-height: 50px;
            background: #262d5b;
            margin-bottom: 10px;
            text-align: center;
            font-weight: 600;
            color: #21c8f2;
            &:hover{
                color: #d7d122;
                opacity: 0.8;
                cursor: pointer;
            }
        }
    }
</style>