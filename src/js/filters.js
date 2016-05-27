var dateUtil = require('tools/dateUtil');

module.exports = function(vue) {
    vue.filter('timeToDate', function(value) {
        return dateUtil.timeToDate(value);
    });
};
