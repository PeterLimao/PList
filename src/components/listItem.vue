<style lang="less">
    .list-item {
        width: 80%;
        margin: 0 auto;
        transition: all 0.2s ease 0.2s;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

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
        transition: all 0.2s ease;
        & > div {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            &:first-child, &:last-child, &:nth-child(3) {
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
            &:nth-child(3) {
                vertical-align: top;
                float: right;
            }
        }
    }

    .text-area {
        width: 100%;
        outline: none;
        resize: none;
        border: none;
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
        width: 90%;
    }
    .remove-box {
        i {
            left: 8px;
            top: 2px;
            color: #ff5b45;
        }
    }
    .edit-box {
        i {
            left: 6px;
            top: 2px;
            color: #ff5b45;
        }
    }

    /*动态添加的效果*/
    .checked {
        background: #6f5499;
    }

    .done-text {
        text-decoration: line-through;
        color: #ccc;
    }

    .edit-mode {
        height: 200px;
    }

    .item-edit-mode {
        width: 100%;
    }

    .add-edit-height {
        height: 180px;
    }
</style>
<template>
    <div class="list-item" :class="[isEdit ? 'item-edit-mode' : '']" @transitionend="addEditHeight">
        <ul>
            <li>
                <div class="list-title">
                    2015-01-02 星期一
                </div>
            </li>
            <li>
                <div class="list-content" :class="[isEdit ? 'edit-mode' : '']">
                    <div v-show="!isEdit">
                        <div class="check-box" :class="[isFinsh ? 'checked' : '']" @click="setFinsh">
                            <i class="glyphicon glyphicon-ok" v-show="isFinsh"></i>
                        </div>
                    </div>
                    <div class="input-msg" :class="[isFinsh ? 'done-text' : '']">
                        <textarea class="text-area" v-if="isEdit" :class="[isAddEditHeight ? 'add-edit-height' : '']"></textarea>
                        <span v-else>12312312312312312312</span>
                    </div>
                    <div>
                        <div class="remove-box">
                            <i class="glyphicon glyphicon-remove"></i>
                        </div>
                    </div>
                    <div>
                        <div class="edit-box" @click="editMode">
                            <i class="glyphicon glyphicon-send"></i>
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
                isFinsh: false,
                isEdit: false,
                isAddEditHeight: false
            }
        },
        methods: {
            setFinsh: function() {
                this.isFinsh = !this.isFinsh;
            },
            editMode: function() {
                this.isEdit = !this.isEdit;
            },
            addEditHeight: function() {
                this.isAddEditHeight = true;
            }
        }
    };
</script>
