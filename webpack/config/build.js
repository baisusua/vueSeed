var path = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var clean = require('clean-webpack-plugin');

module.exports = {
    devtool: false,
	entry: path.resolve(__dirname, '../../app/app.js'),
	output: {
        path: path.resolve(__dirname, '../../build'),
        publicPath: '/',
        filename: 'index.[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
	resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
        	{test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/,loader: 'babel?presets=es2015',exclude: /node_modules/}
        ]
    },
    plugins: [
        new clean('build',{
            root: path.resolve(__dirname, '../../')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../../app/index.html'),
            inject: true
        })
    ]
}