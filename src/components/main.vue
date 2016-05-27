<style lang="less" scoped>
    .begin-new-day {
        margin: 20px auto;
        background: #6f5499;
        color: #fff;
        height: 30px;
        width: 40%;
        text-align: center;
        line-height: 30px;
    }
</style>
<template>
    <div class="main">
        <v-header></v-header>
        <v-nav></v-nav>
        <v-add-panel></v-add-panel>
        <div class="main-content" v-for="item in todoList | orderBy 'date' -1 ">
            <v-list-item :item="item"></v-list-item>
        </div>
        <div class="begin-new-day">
            点击红色按钮，开始新的一天 :)
        </div>
    </div>
</template>
<script>
    var header = require('components/header'),
        nav = require('components/nav'),
        addPanel = require('components/addPanel'),
        datePicker = require('components/datePicker'),
        listItem = require('components/listItem'),
        actions = require('actions');

    module.exports = {
        vuex: {
            getters: {
                todoList: function(state) {
                    return state.todoList;
                }
            }
        },
        components: {
            'v-header': header,
            'v-nav': nav,
            'v-add-panel': addPanel,
            'v-list-item': listItem
        }
    };
</script>
