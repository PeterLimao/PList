var webpack = require('webpack'),
    path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin');

var myAlias = {
    components: path.join(__dirname, './src/components'),
    state: path.join(__dirname, './src/js/vuex/state'),
    mutations: path.join(__dirname, './src/js/vuex/mutations'),
    store: path.join(__dirname, './src/js/vuex/store'),
    actions: path.join(__dirname, './src/js/vuex/actions'),
    tools: path.join(__dirname, './src/js/tools'),
    mFilter: path.join(__dirname, './src/js/filters')
};

module.exports = {
    entry: ['./src/js/app'],
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: '[name].js',
        chunkname: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.less', '.css'],
        alias: myAlias
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new htmlWebpackPlugin({
            filename: path.join(__dirname, './dist/app.html'),
            template: './src/app.html',
            inject: true,
            hash: true
        })
    ]
}
