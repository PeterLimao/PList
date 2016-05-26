<style lang="less">
    .add-panel {
        position: relative;
        .add-btn {
            position: fixed;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #ff5b45;
            right: 28px;
            bottom: 28px;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
            line-height: 56px;
            text-align: center;
            transition: all 0.5s ease;
            i {
                color: #fff;
            }
            &:hover {
                box-shadow: 0 5px 10px 2px rgba(0,0,0,0.26);
            }
        }
        .panel {
            width: 500px;
            height: 60%;
            background: #6f5499;
            position: fixed;
            right: 56px + 28px;
            bottom: 56px;
            z-index: 10;
            .input-area {
                display: block;
                resize: none;
                border: none;
                padding: 20px;
                outline: 0;
                width: 100%;
                height: 80%;
                margin-top: 10px auto;
                font-size: 20px;
                color: #ffffff;
                background: #6f5499;
            }
            .footer-panel {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                & > .col-xs-6 {
                    height: 50px;
                    text-align: center;
                    line-height: 50px;
                    color: #ffffff;
                    cursor: pointer;
                }
            }
        }
    }

    .btn-rotate {
        transform: rotate(-45deg);
    }

    .panel-transition {
        transition: all 0.5s ease;
    }

    .panel-enter, .panel-leave {
        transform: translateY(-250px);
        opacity: 0;
    }
</style>
<template>
    <div class="add-panel">
        <div class="add-btn" :class="[isShowPanel ? 'btn-rotate' : '']" @click="setShowPanel">
            <i class="glyphicon glyphicon-plus"></i>
        </div>
        <div class="panel" v-show="isShowPanel" transition="panel">
            <textarea class="input-area" placeholder="写点什么吧!" v-model="message"></textarea>
            <div class="footer-panel">
                <div class="col-xs-6">
                    <v-date-picker></v-date-picker>
                </div>
                <div class="col-xs-6" @click="addList">
                    添加
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var datePicker = require('components/datePicker');
    var actions = require('actions');
    var dateUtil = require('tools/dateUtil');

    module.exports = {
        data: function() {
            return {
                message: '',
                dateValue: dateUtil.getToday()
            }
        },
        vuex: {
            getters: {
                isShowPanel: function(state) {
                    return state.panelShowFlag;
                }
            },
            actions: {
                setPanel: actions.setPanel,
                addTodoList: actions.addTodoList
            }
        },
        methods: {
            setShowPanel: function() {
                this.setPanel(!this.isShowPanel);
            },
            addList: function() {
                this.addTodoList({
                    date: this.dateValue,
                    msg: this.message,
                    state: 'doing'
                });
                this.message = '';
                this.setPanel(false);
            }
        },
        events: {
            'newDateValue': function(dateValue) {
                this.dateValue = dateValue;
            }
        },
        components: {
            'v-date-picker': datePicker
        }
    };
</script>
