var dateUtil = {};

dateUtil.getToday = function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() < 11 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate();
    return year + '/' + month + '/' + day;
};

module.exports = dateUtil;
