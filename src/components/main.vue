<style lang="less" scoped>
    /*基本样式*/
    .begin-new-day {
        margin: 20px auto;
        background: #6f5499;
        color: #fff;
        height: 30px;
        width: 40%;
        text-align: center;
        line-height: 30px;
    }

    .main-panel-content {
        width: 100%;
        margin: 70px auto;
        display: -webkit-box;
        display: -moz-box;
        overflow: scroll;;
    }
</style>
<template>
    <section class="main">
        <v-header></v-header>
        <v-nav></v-nav>
        <v-add-panel></v-add-panel>
        <div class="main-panel-content">
            <v-list-panel :menu-item="menuItem" v-for="menuItem in menuList"></v-list-panel>
        </div>
        <div class="begin-new-day">
            点击红色按钮，开始新的一天 :)
        </div>
    </section>
</template>
<script>
    var header = require('components/header'),
        nav = require('components/nav'),
        addPanel = require('components/addPanel'),
        datePicker = require('components/datePicker'),
        listPanel = require('components/listPanel');

    module.exports = {
        vuex: {
            getters: {
                menuList: function(state) {
                    return state.menuList;
                }
            }
        },
        components: {
            'v-header': header,
            'v-nav': nav,
            'v-add-panel': addPanel,
            'v-list-panel': listPanel
        }
    };
</script>
