<style lang="less" scoped>
    /*动画效果*/
    .trans-menu-transition {
        transition: all 0.4s ease;
    }

    .trans-menu-leave, .trans-menu-enter {
        transform: translateX(-250px);
    }

    /*基本样式*/
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
            a {
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
        a {
            color: #6f5499;
        }
    }

    .leave {
        left: -250px;
    }
</style>
<template>
    <nav class="nav" :class="[isShowMenu ? '': 'leave']" v-show="isShowMenu" transition="trans-menu">
        <div>
            <ul class="list-group">
                <li class="list-group-item" v-for="item in menuList">
                    <span class="badge">{{item.count}}</span>
                    <i class="{{item.icon}}"></i>
                    <a href="#{{item.index}}" @click="hideMenu">{{item.msg}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import Actions from 'actions';

    export default {
        vuex: {
            getters: {
                menuList: (state) => state.menuList,
                isShowMenu: (state) => state.menuShowFlag
            },
            actions: {
                setAllListCount: Actions.setAllListCount,
                setShowMenu: Actions.setMenu
            }
        },
        methods: {
            hideMenu: function() {
                this.setShowMenu(false);
            }
        }
    };
</script>
