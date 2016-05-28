var state = {
    menuList: [
        {msg: '全部事项', count: 0, icon: 'glyphicon glyphicon-list-alt', state: 'all'},
        {msg: '在忙事项', count: 0, icon: 'glyphicon glyphicon-option-horizontal', state: 'doing'},
        {msg: '完成事项', count: 0, icon: 'glyphicon glyphicon-ok', state: 'done'}
    ],
    menuShowFlag: false,
    panelShowFlag: false,
    todoList: []
};
module.exports = state;
