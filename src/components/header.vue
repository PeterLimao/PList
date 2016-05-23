<style lang="less">
    .header {
        .navbar {
            background: #6f5499;
            border-radius: 0;
            margin-bottom: 0;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
            .navbar-header {
                span:first-child {
                    padding-right: 0;
                    line-height: 1;
                    cursor: pointer;
                }
                .navbar-brand {
                    color: #fff;
                }
            }
        }
    }
</style>
<template>
    <div class="header">
        <div class="navbar">
            <div class="container-fiuld">
                <div class="navbar-header">
                    <span class="navbar-brand glyphicon glyphicon-menu-hamburger" @click="clickMenu">
                    </span>
                    <span class="navbar-brand">
                        PetersList
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var actions = require('actions');

    module.exports = {
        vuex: {
            getters: {
                menuShowFlag: function(state) {
                    return state.menuShowFlag;
                }
            },
            actions: {
                setMenu: actions.setMenu
            }
        },
        methods: {
            clickMenu: function() {
                var isShow = this.menuShowFlag;
                this.setMenu(!isShow);
            }
        }
    };
</script>
