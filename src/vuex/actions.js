let actions = {
    setMenu (store, isShow) {
        store.dispatch('SET_MENU_FLAG', isShow);
        store.dispatch('SET_TODO_LIST_COUNT');
        store.dispatch('SET_TODO_DOING_LIST_COUNT');
        store.dispatch('SET_TODO_DONE_LIST_COUNT');
    },
    setPanel (store, isShow) {
        store.dispatch('SET_PANEL_FLAG', isShow);
    },
    setLoad (store, isLoad) {
        store.dispatch('SET_LOAD_STATE', isLoad);
    },
    addTodoList (store, item) {
        store.dispatch('ADD_TODO_DOING_LIST', item);
        store.dispatch('ADD_TODO_LIST', item);
    },
    removeTodoList (store, id) {
        store.dispatch('REMOVE_TODO_LIST', id);
        store.dispatch('REMOVE_TODO_DONE_LIST', id);
        store.dispatch('REMOVE_TODO_DOING_LIST', id);
    },
    setTodoListState (store, item) {
        if (item.state === 'doing') {
            store.dispatch('REMOVE_TODO_DONE_LIST', item.id);
            store.dispatch('ADD_TODO_DOING_LIST', {
                id: item.id,
                msg: item.msg,
                date: item.date,
                state: 'doing',
                head: true
            });
        }
        if (item.state === 'done') {
            store.dispatch('REMOVE_TODO_DOING_LIST', item.id);
            store.dispatch('ADD_TODO_DONE_LIST', {
                id: item.id,
                msg: item.msg,
                date: item.date,
                state: 'done',
                head: true
            })
        }
        store.dispatch('SET_TODO_LIST', item);
    },
    setTodoListMsg (store, item) {
        if (item.state === 'doing') {
            store.dispatch('SET_TODO_DOING_LIST', item);
        }
        if (item.state === 'done') {
            store.dispatch('SET_TODO_DONE_LIST', item);
        }
        store.dispatch('SET_TODO_LIST', item);
    }
};

export default actions;
