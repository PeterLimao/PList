<style lang="less" scoped>
    /*基本样式*/
    .cov-date-box {
        background: #fff;
    }

    .date-picker {
        cursor: pointer;
    }
</style>
<template>
    <div class="date-picker">
        <date-picker :time.sync="todayTime" :option="option"></date-picker>
    </div>
</template>
<script>
import DatePicker from 'vue-datepicker';
import DateUtil from 'tools/dateUtil';

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

export default {
    data () {
        return {
            option: datePickerOption
        }
    },
    computed: {
        todayTime: {
            get () {
                return DateUtil.getToday()
            },
            set (newValue) {
                this.$dispatch('newDateValue', newValue);
            }
        }
    },
    components: {
        'date-picker': DatePicker
    }
}
</script>
