var mutations = {
    'SET_MENU_FLAG': function(state, isLoad) {
        state.menuShowFlag = isLoad;
    },
    'SET_PANEL_FLAG': function(state, isLoad) {
        state.panelShowFlag = isLoad;
    },
    'SET_LOAD_STATE': function(state, isLoad) {
        state.isLoad = isLoad;
    },
    'ADD_TODO_LIST': function(state, item) {
        item.id = new Date().getTime();
        item.head = true;
        for (var i = 0; i < state.todoList.length; i++) {
            if (state.todoList[i].date === item.date) {
                item.head = false;
            }
        }
        state.todoList.push(item);
    },
    'ADD_TODO_DOING_LIST': function(state, item) {
        item.id = new Date().getTime();
        item.head = true;
        for (var i = 0; i < state.todoDoingList.length; i++) {
            if (state.todoDoingList[i].date === item.date) {
                item.head = false;
            }
        }
        state.todoDoingList.push(item);
    },
    'ADD_TODO_DONE_LIST': function(state, item) {
        item.id = new Date().getTime();
        item.head = true;
        for (var i = 0; i < state.todoDoneList.length; i++) {
            if (state.todoDoneList[i].date === item.date) {
                item.head = false;
            }
        }
        state.todoDoneList.push(item);
    },
    'REMOVE_TODO_LIST': function(state, id) {
        for (var i = 0; i < state.todoList.length; i++) {
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
    'REMOVE_TODO_DOING_LIST': function(state, id) {
        for (var i = 0; i < state.todoDoingList.length; i++) {
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
    'REMOVE_TODO_DONE_LIST': function(state, id) {
        for (var i = 0; i < state.todoDoneList.length; i++) {
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
module.exports = mutations;
