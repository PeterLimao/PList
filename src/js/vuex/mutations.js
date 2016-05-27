var mutations = {
    'SET_MENU_FLAG_TRUE': function(state) {
        state.menuShowFlag = true;
    },
    'SET_MENU_FLAG_FALSE': function(state) {
        state.menuShowFlag = false;
    },
    'SET_PANEL_FLAG_TRUE': function(state) {
        state.panelShowFlag = true;
    },
    'SET_PANEL_FLAG_FALSE': function(state) {
        state.panelShowFlag = false;
    },
    ADD_TODO_LIST: function(state, item) {
        item.id = new Date().getTime();
        item.head = true;
        for (var i = 0; i < state.todoList.length; i++) {
            if (state.todoList[i].date === item.date) {
                item.head = false;
            }
        }
        state.todoList.push(item);
    },
    SET_TODO_LIST: function(state, item) {
        for (var i = 0; i < state.todoList.length; i++) {
            if (item.id === state.todoList[i].id) {
                state.todoList[i].msg = item.msg;
                state.todoList[i].state = item.state;
                break;
            }
        }
    },
    REMOVE_TODO_LIST: function(state, id) {
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
    }
};
module.exports = mutations;
