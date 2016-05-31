var actions = {
    setMenu: function(store, isShow) {
        store.dispatch('SET_MENU_FLAG', isShow);
    },
    setPanel: function(store, isShow) {
        store.dispatch('SET_PANEL_FLAG', isShow);
    },
    setLoad: function(store, isLoad) {
        store.dispatch('SET_LOAD_STATE', isLoad);
    },
    addTodoList: function(store, item) {
        store.dispatch('ADD_TODO_DOING_LIST', item);
        store.dispatch('ADD_TODO_LIST', item);
    },
    removeTodoList: function(store, id) {
        store.dispatch('REMOVE_TODO_LIST', id);
        store.dispatch('REMOVE_TODO_DONE_LIST', id);
        store.dispatch('REMOVE_TODO_DOING_LIST', id);
    },
    setTodoListState: function(store, item) {
        if (item.state === 'doing') {
            store.dispatch('REMOVE_TODO_DONE_LIST', item.id);
            store.dispatch('ADD_TODO_DOING_LIST', item);
        }
        if (item.state === 'done') {
            store.dispatch('REMOVE_TODO_DOING_LIST', item.id);
            store.dispatch('ADD_TODO_DONE_LIST', item)
        }
        store.dispatch('SET_TODO_LIST', item);
    },
    setTodoListMsg: function(store, item) {
        if (item.state === 'doing') {
            store.dispatch('SET_TODO_DOING_LIST', item);
        }
        if (item.state === 'done') {
            store.dispatch('SET_TODO_DONE_LIST', item);
        }
        store.dispatch('SET_TODO_LIST', item);
    }
};

module.exports = actions;
