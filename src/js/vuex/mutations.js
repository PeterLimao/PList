let mutations = {
    SET_MENU_FLAG (state, isLoad) {
        state.menuShowFlag = isLoad;
    },
    SET_PANEL_FLAG (state, isLoad) {
        state.panelShowFlag = isLoad;
    },
    SET_LOAD_STATE (state, isLoad) {
        state.isLoad = isLoad;
    },
    ADD_TODO_LIST (state, item) {
        item.id = new Date().getTime();
        item.head = true;
        for (var i of state.todoList) {
            if (state.todoList[i].date === item.date) {
                item.head = false;
                break;
            }
        }
        state.todoList.push(item);
    },
    ADD_TODO_DOING_LIST (state, item) {
        item.id = new Date().getTime();
        item.head = true;
        for (var i of state.todoDoingList) {
            if (state.todoDoingList[i].date === item.date) {
                item.head = false;
                break;
            }
        }
        state.todoDoingList.push(item);
    },
    ADD_TODO_DONE_LIST (state, item) {
        item.id = new Date().getTime();
        item.head = true;
        for (let i of state.todoDoneList) {
            if (state.todoDoneList[i].date === item.date) {
                item.head = false;
                break;
            }
        }
        state.todoDoneList.push(item);
    },
    SET_TODO_LIST (state, item) {
        for (let i of state.todoList) {
            if (state.todoList[i].id === item.id) {
                var newHeadFlag = state.todoList[i - 1] && state.todoList[i - 1].date === item.date ? false : true;
                state.todoList.$set(i, {
                    id: item.id,
                    date: item.date,
                    state: item.state,
                    msg: item.msg,
                    head: newHeadFlag
                });
                break;
            }
        }
    },
    SET_TODO_DOING_LIST (state, item) {
        for (let i of state.todoDoingList) {
            if (state.todoDoingList[i].id === item.id) {
                var newHeadFlag = state.todoDoingList[i - 1] && state.todoDoingList[i - 1].date === item.date ? false : true;
                state.todoDoingList.$set(i, {
                    id: item.id,
                    date: item.date,
                    state: item.state,
                    msg: item.msg,
                    head: newHeadFlag
                });
                break;
            }
        }
    },
    SET_TODO_DONE_LIST (state, item) {
        for (let i of state.todoDoneList) {
            if (state.todoList[i].id === item.id) {
                var newHeadFlag = state.todoDoneList[i - 1] && state.todoDoneList[i - 1].date === item.date ? false : true;
                state.todoDoneList.$set(i, {
                    id: item.id,
                    date: item.date,
                    state: item.state,
                    msg: item.msg,
                    head: newHeadFlag
                });
                break;
            }
        }
    },
    REMOVE_TODO_LIST (state, id) {
        for (let i of state.todoList) {
            if (id === state.todoList[i].id) {
                if (state.todoList[i + 1]) {
                    if (state.todoList[i].head && state.todoList[i + 1].date === state.todoList[i].date) {
                        state.todoList[i + 1].head = true;
                    }
                }
                state.todoList.splice(i, 1);
                break;
            }
        }
    },
    REMOVE_TODO_DOING_LIST (state, id) {
        for (let i of state.todoDoingList) {
            if (id === state.todoDoingList[i].id) {
                if (state.todoDoingList[i + 1]) {
                    if (state.todoDoingList[i].head && state.todoDoingList[i + 1].date === state.todoDoingList[i].date) {
                        state.todoDoingList[i + 1].head = true;
                    }
                }
                state.todoDoingList.splice(i, 1);
                break;
            }
        }
    },
    REMOVE_TODO_DONE_LIST (state, id) {
        for (let i of state.todoDoneList) {
            if (id === state.todoDoneList[i].id) {
                if (state.todoDoneList[i + 1]) {
                    if (state.todoDoneList[i].head && state.todoDoneList[i + 1].date === state.todoDoneList[i].date) {
                        state.todoDoneList[i + 1].head = true;
                    }
                }
                state.todoDoneList.splice(i, 1);
                break;
            }
        }
    }
};
export default mutations;
