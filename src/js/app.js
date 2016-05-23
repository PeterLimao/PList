var vue = require('vue'),
    vuex = require('vuex');

vue.use(vuex);
vue.config.debug = true;
vue.config.devtools = true;

var app = require('components/app');

//创建vue实例，挂在在body上
new vue({
    el: 'body',
    components: {
        'v-app': app
    }
});
