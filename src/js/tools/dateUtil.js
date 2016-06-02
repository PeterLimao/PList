let dateUtil = {};

dateUtil.getToday = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() < 11 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let day = date.getDate();
    return year + '/' + month + '/' + day;
};

dateUtil.timeToDate = (time) => {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() < 11 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let day = date.getDate();
    return year + '/' + month + '/' + day;
};

export default dateUtil;
