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
    setAllListCount: function(store, countList) {
        store.dispatch('SET_ALL_LIST_COUNT', countList[0]);
        store.dispatch('SET_DONE_LIST_COUNT', countList[1]);
        store.dispatch('SET_DOING_LIST_COUNT', countList[2]);
        store.dispatch('SET_DELETED_LIST_COUNT', countList[3]);
    }
};

module.exports = actions;
