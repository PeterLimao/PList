var webpack = require('webpack'),
    path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin');

var myAlias = {
    components: __dirname + '/src/components',
    state: __dirname + '/src/js/vuex/state',
    mutations: __dirname + '/src/js/vuex/mutations',
    store: __dirname + '/src/js/vuex/store',
    actions: __dirname + '/src/js/vuex/actions',
    tools: __dirname + '/src/js/tools'
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
