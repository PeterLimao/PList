<style lang="less">
    .cov-date-box {
        background: #fff;
    }
</style>
<template>
    <div class="date-picker">
        <date-picker :time.sync="todayTime" :option="option"></date-picker>
    </div>
</template>
<script>
var datePicker = require('vue-datepicker'),
    dateUtil = require('tools/dateUtil');

var datePickerOption = {
    type: 'day',
    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    format: 'YYYY/MM/DD',
    inputStyle: {
        'color': '#fff',
        'background': '#6f5499',
        'outline': '0',
        'border': 'none',
        'box-shadow': 'none',
        'text-align': 'center'
    },
    color: {
        header: '#6f5499'
    }
};

module.exports = {
    data: function() {
        return {
            option: datePickerOption
        }
    },
    computed: {
        todayTime: {
            get: function() {
                return dateUtil.getToday();
            },
            set: function(newValue) {
                this.$dispatch('newDateValue', newValue);
            }
        }
    },
    components: {
        'date-picker': datePicker
    }
}
</script>
