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
        state.todoList[new Date().getTime()] = item;
    },
    SET_TODO_LIST: function(state, key, item) {
        state.todoList[key] = item;
    }
};
module.exports = mutations;
