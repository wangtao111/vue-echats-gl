<template>
    <div>
        <ul class="country_list">
            <li v-for="(item, i) in myList" :class="{hover: isActive === i}" @click="chooseCountry(i)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "country-list",
        components: {},
        props: ['list', 'chooseMap', 'sss'],
        data() {
            return {
                isActive: 0,
                myList: this.list
            }
        },
        beforeUpdate() {
        },
        mounted() {
        },
        updated() {
        },
        methods: {
            chooseCountry(i) {
                this.isActive = i;
                this.$emit('chooseMap', this.myList[i].val)
            },
            hoverMove(name) {
                this.myList.forEach((item, i) => {
                    if (item.name === name) {
                        this.isActive = i;
                    }
                })
            }
        }
    }
</script>

<style lang="less" type="text/less" scoped>
    @import "countryList";
</style>