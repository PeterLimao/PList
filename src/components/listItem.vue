<style lang="less">
    .list-item {
        width: 70%;
        margin: 0 auto;
        ul {
            list-style: none;
            padding-left: 0;
            .list-title {
                color: #6f5499;
                text-align: center;
                font-size: 12px;
                min-height: 16px;
                padding: 10px;
            }
            .list-content {
                height: 50px;
                background: #fff;
                padding: 10px;
                & > div {
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    &:first-child, &:last-child {
                        width: 30px;
                        &:active {
                            background: rgba(115, 130, 115, 0.1);
                            border-radius: 50%;
                        }
                    }
                    &:last-child {
                        vertical-align: top;
                        float: right;
                    }
                }
                .check-box {
                    width: 20px;
                    height: 20px;
                    border: 1px solid #ccc;
                    margin: 5px;
                    border-radius: 2px;
                    i {
                        color: #fff;
                        top: -3px;
                        left: 1px;
                    }
                }
                .input-msg {
                    font-size: 16px;
                    color: #222222;
                    vertical-align: top;
                }
                .remove-box {
                    i {
                        left: 8px;
                        top: 2px;
                        color: #ff5b45;
                    }
                }
            }
        }
    }

    /*动态添加的效果*/
    .checked {
        background: #6f5499;
    }

    .done-text {
        text-decoration: line-through;
        color: #fcfcfc;
    }
</style>
<template>
    <div class="list-item">
        <ul>
            <li>
                <div class="list-title">
                    2015-01-02 星期一
                </div>
            </li>
            <li>
                <div class="list-content">
                    <div>
                        <div class="check-box" :class="[isFinsh ? 'checked' : '']" @click="setFinsh">
                            <i class="glyphicon glyphicon-ok" v-show="isFinsh"></i>
                        </div>
                    </div>
                    <div class="input-msg" :class="[isFinsh ? 'done-text' : '']">
                        12312312312312312312
                    </div>
                    <div>
                        <div class="remove-box">
                            <i class="glyphicon glyphicon-remove"></i>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                isFinsh: false
            }
        },
        methods: {
            setFinsh: function() {
                this.isFinsh = !this.isFinsh;
            }
        }
    };
</script>
