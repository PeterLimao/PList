<style lang="less" scoped>
    /*基本样式*/
    .main {
        padding-top: 70px;
    }

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
        margin: 0 auto;
        display: -webkit-box;
        display: -moz-box;
        overflow-x: hidden;
        transition: all 0.2s ease;
    }
</style>
<template>
    <section class="main" v-if="isLoad">
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
    import Header from 'components/header';
    import Nav from 'components/nav';
    import AddPanel from 'components/addPanel';
    import DatePicker from 'components/datePicker';
    import ListPanel from 'components/listPanel';
    import Actions from 'actions';

    export default {
        vuex: {
            getters: {
                menuList (state) {
                    return state.menuList;
                },
                isLoad (state) {
                    return state.isLoad;
                }
            }
        },
        components: {
            'v-header': Header,
            'v-nav': Nav,
            'v-add-panel': AddPanel,
            'v-list-panel': ListPanel
        }
    };
</script>
