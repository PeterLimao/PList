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
    'ADD_DONE_LIST': function(state, listObj) {
        state.doneList.push(listObj);
    },
    'REMOVE_DONE_LIST': function(state) {
        state.doneList.pop();
    },
    'ADD_DOING_LIST': function(state, listObj) {
        state.doingList.push(listObj);
    },
    'REMOVE_DOING_LIST': function(state) {
        state.doingList.pop();
    },
    'ADD_DELETED_LIST': function(state, listObj) {
        state.deletedList.push(listObj);
    },
    'REMOVE_DELETED_LIST': function(state) {
        state.deleteList.pop();
    },
    'SET_DONE_LIST_COUNT': function(state, count) {
        state.menuList[1].count = count;
    },
    'SET_DOING_LIST_COUNT': function(state, count) {
        state.menuList[2].count = count;
    },
    'SET_DELETED_LIST_COUNT': function(state, count) {
        state.menuList[3].count = count;
    },
    'SET_ALL_LIST_COUNT': function(state, count) {
        state.menuList[0].count = count;
    }
};
module.exports = mutations;
