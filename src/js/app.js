import Vue from 'vue';
import Vuex from 'vuex';
import Filters from 'mFilter';

Vue.config.debug = true;
Vue.config.devtools = true;
//注册过滤器
Filters(Vue);

import App from 'components/app';

//创建vue实例，挂在在body上
new Vue({
    el: 'body',
    components: {
        'v-app': App
    }
});
