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
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>
<template>
    <section id="{{menuItem.index}}" class="list-panel" v-if="list.length">
        <div class="type-title">
            <span class="badge">{{menuItem.msg}}</span>
        </div>
        <div class="panel-content">
            <div class="main-content" v-for="item in list | orderBy 'date' -1 " track-by="id">
                <v-list-item :item="item"></v-list-item>
            </div>
        </div>
    </section>
</template>
<script>
    import ListItem from 'components/listItem';

    export default {
        data () {
            return {
                list: []
            }
        },
        props: ['menuItem'],
        vuex: {
            getters: {
                todoList (state) {
                    return state.todoList;
                },
                todoDoingList (state) {
                    return state.todoDoingList;
                },
                todoDoneList (state) {
                    return state.todoDoneList;
                }
            }
        },
        ready() {
            if (this.menuItem.index === 'all') {
                this.list = this.todoList;
            }
            if (this.menuItem.index === 'doing') {
                this.list = this.todoDoingList;
            }
            if (this.menuItem.index === 'done') {
                this.list = this.todoDoneList;
            }
        },
        components: {
            'v-list-item': ListItem
        }
    };
</script>
