var state = {
    menuList: [
        {index: 'all', msg: '全部事项', count: 0, icon: 'glyphicon glyphicon-list-alt', state: 'all'},
        {index: 'doing', msg: '在忙事项', count: 0, icon: 'glyphicon glyphicon-option-horizontal', state: 'doing'},
        {index: 'done', msg: '完成事项', count: 0, icon: 'glyphicon glyphicon-ok', state: 'done'}
    ],
    isLoad: false,
    menuShowFlag: false,
    panelShowFlag: false,
    todoList: [],
    todoDoneList: [],
    todoDoingList: []
};
module.exports = state;
