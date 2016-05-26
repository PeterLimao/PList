<style lang="less">
    .trans-menu-transition {
        transition: all 0.4s ease;
    }

    .trans-menu-leave, .trans-menu-enter {
        transform: translateX(-250px);
    }

    .nav {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 52px;
        height: 100%;
        background: #fff;
        width: 250px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.15);
    }

    .list-group {
        margin-top: 10px;
    }

    .list-group-item {
        padding: 20px 15px;
        height: 60px;
        border: 0;
        border-radius: 0;
        transition: background-color 0.2s ease;
        &:hover {
            color: #fff;
            background: #6f5499;
            i {
                color: #fff;
            }
            .badge {
                background: #fff;
                color: #6f5499;
            }
        }
        .badge {
            background-color: #6f5499
        }
        i {
            margin-right: 5px;
            color: #6f5499;
        }
    }

    .leave {
        left: -250px;
    }
</style>
<template>
    <div class="nav" :class="[isShowMenu ? '': 'leave']" v-show="isShowMenu" transition="trans-menu">
        <div>
            <ul class="list-group">
                <li class="list-group-item" v-for="item in menuList">
                    <span class="badge">{{item.count}}</span>
                    <i class="{{item.icon}}"></i>
                    {{item.msg}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    var actions = require('actions');
    module.exports = {
        vuex: {
            getters: {
                menuList: function(state) {
                    return state.menuList;
                },
                isShowMenu: function(state) {
                    return state.menuShowFlag;
                }
            },
            actions: {
                setAllListCount: actions.setAllListCount
            }
        }
    };
</script>
