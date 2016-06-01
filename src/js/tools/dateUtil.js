let dateUtil = {};

dateUtil.getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() < 11 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate();
    return year + '/' + month + '/' + day;
};

dateUtil.timeToDate = (time) => {
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() < 11 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate();
    return year + '/' + month + '/' + day;
};

export default dateUtil;
