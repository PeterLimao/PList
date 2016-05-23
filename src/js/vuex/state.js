var state = {
    menuList: [
        {msg: '全部事项', count: 14, icon: 'glyphicon glyphicon-list-alt'},
        {msg: '完成事项', count: 14, icon: 'glyphicon glyphicon-ok'},
        {msg: '在忙事项', count: 14, icon: 'glyphicon glyphicon-option-horizontal'},
        {msg: '清除事项', count: 14, icon: 'glyphicon glyphicon-remove'}
    ],
    menuShowFlag: false,
    panelShowFlag: false,
    doneList: [],
    deletedList: [],
    doingList: [
        {
            date: '',
            list: [
                {
                    msg: ''
                }
            ]
        }
    ]
};
module.exports = state;
