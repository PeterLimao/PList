<style lang="less" scoped>
    /*基础样式*/
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    .navbar {
        background: #6f5499;
        border-radius: 0;
        margin-bottom: 0;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
    }

    .navbar-header {
        span:first-child {
            padding-right: 0;
            line-height: 1;
            cursor: pointer;
        }
    }

    .navbar-brand {
        color: #fff;
    }
</style>
<template>
    <header class="header">
        <div class="navbar">
            <div class="container-fiuld">
                <div class="navbar-header">
                    <i class="navbar-brand glyphicon glyphicon-menu-hamburger" @click="clickMenu"></i>
                    <span class="navbar-brand">
                        PList
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    import Actions from 'actions';

    export default {
        vuex: {
            getters: {
                menuShowFlag (state) {
                    return state.menuShowFlag;
                }
            },
            actions: {
                setMenu: Actions.setMenu
            }
        },
        methods: {
            clickMenu () {
                let isShow = this.menuShowFlag;
                this.setMenu(!isShow);
            }
        }
    };
</script>
