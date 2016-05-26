<template>
    <div class="main">
        <v-header></v-header>
        <v-nav></v-nav>
        <v-add-panel></v-add-panel>
        <div class="main-content" v-for="item in todoList">
            <v-list-item :item="item"></v-list-item>
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
