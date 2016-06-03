import DateUtil from 'tools/dateUtil';

export default (vue) => {
    vue.filter('timeToDate', (value) => DateUtil.timeToDate(value));
};
