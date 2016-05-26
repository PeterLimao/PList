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
        state.todoList.push(item);
    },
    SET_TODO_LIST: function(state, item) {
        for (var i = 0; i < state.todoList.length; i++) {
            if (item.id === state.todoList[i].id) {
                state.todoList[i] = item;
                break;
            }
        }
    }
};
module.exports = mutations;
