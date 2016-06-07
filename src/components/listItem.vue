<style lang="less" scoped>
    /*基础样式*/
    .list-item {
        width: 80%;
        margin: 0 auto;
        transition: all 0.2s ease;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    .list-title {
        color: #aaa;
        text-align: center;
        min-height: 16px;
        padding: 10px;
    }

    .list-content {
        background: #fff;
        padding: 10px;
        transition: all 0.2s ease;
        min-height: 55px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .25);
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
        color: #000;
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
        width: 85%;
        word-break: break-all;
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

    /*媒体查询部分*/
    @media(max-width: 1200px) {
        .input-msg {
            width: 70%;
        }
    }

    @media(max-width: 450px) {
        .input-msg {
            width: 60%;
        }
    }
</style>
<template>
    <div class="list-item" :class="[isEdit ? 'item-edit-mode' : '']" @transitionend="addEditHeight">
        <ul>
            <li>
                <div class="list-title" v-if="item.head">
                    {{item.date | timeToDate}}
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
                        <textarea class="text-area" v-if="isEdit" :class="[isAddEditHeight ? 'add-edit-height' : '']" v-model="item.msg" autofocus></textarea>
                        <span v-if="!isEdit">{{item.msg}}</span>
                    </div>
                    <div>
                        <div class="remove-box" @click="remove(item.id)">
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
    import Actions from 'actions';

    export default {
        data () {
            return {
                isEdit: false,
                isAddEditHeight: false
            }
        },
        computed: {
            isFinsh () {
                return this.item.state === 'done' ? true : false;
            },
        },
        vuex: {
            actions: {
                removeTodoList: Actions.removeTodoList,
                setTodoListState: Actions.setTodoListState,
                setTodoListMsg: Actions.setTodoListMsg
            }
        },
        props: ['item'],
        methods: {
            setFinsh () {
                if (this.isFinsh) {
                    this.item.state = 'doing';
                } else {
                    this.item.state = 'done';
                }
                this.setTodoListState(this.item);
            },
            editMode () {
                this.isEdit = !this.isEdit;
                if (!this.isEdit) {
                    this.setTodoListMsg(this.item);
                }
            },
            addEditHeight () {
                this.isAddEditHeight = true;
            },
            remove (id) {
                this.removeTodoList(id);
            }
        }
    };
</script>
