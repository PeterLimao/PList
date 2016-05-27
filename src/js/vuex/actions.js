var actions = {
    setMenu: function(store, isShow) {
        if (isShow) {
            store.dispatch('SET_MENU_FLAG_TRUE');
        } else {
            store.dispatch('SET_MENU_FLAG_FALSE');
        }
    },
    setPanel: function(store, isShow) {
        if (isShow) {
            store.dispatch('SET_PANEL_FLAG_TRUE');
        } else {
            store.dispatch('SET_PANEL_FLAG_FALSE');
        }
    },
    addTodoList: function(store, item) {
        store.dispatch('ADD_TODO_LIST', item);
    },
    removeTodoList: function(store, id) {
        store.dispatch('REMOVE_TODO_LIST', id);
    }
};

module.exports = actions;
