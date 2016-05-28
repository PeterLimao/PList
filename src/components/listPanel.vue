<style lang="less" scoped>
    /*基本样式*/
    .list-panel {
        width: 100%;
        padding: 0 5%;
    }

    .type-title {
        text-align: center;
        width: 100%;
        margin: 10px auto;
    }

    .badge {
        background: #ff5b45;
    }

    .panel-content {
        width: 100%;
        background: #fff;
        margin: 10px auto;
    }
</style>
<template>
    <section class="list-panel">
        <div class="type-title">
            <span class="badge">{{menuItem.msg}}</span>
        </div>
        <div class="panel-content">
            <div class="main-content" v-for="item in todoList | orderBy 'date' -1 ">
                <v-list-item :item="item"></v-list-item>
            </div>
        </div>
    </section>
</template>
<script>
    var listItem = require('components/listItem');

    module.exports = {
        props: ['menuItem'],
        vuex: {
            getters: {
                todoList: function(state) {
                    return state.todoList;
                }
            }
        },
        components: {
            'v-list-item': listItem
        }
    };
</script>
