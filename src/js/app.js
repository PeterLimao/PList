var vue = require('vue'),
    vuex = require('vuex'),
    filters = require('mFilter');

vue.use(vuex);
vue.config.debug = true;
vue.config.devtools = true;
//注册过滤器
filters(vue);

var app = require('components/app');

//创建vue实例，挂在在body上
new vue({
    el: 'body',
    components: {
        'v-app': app
    }
});
