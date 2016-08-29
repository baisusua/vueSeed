var path = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var entry = require('./entry');

module.exports = {
    devtool: false,
	entry: entry.build,
	output: {
        path: path.resolve(__dirname, '../../build'),
        publicPath: '/',
        filename: '[name].[hash].js',
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
            {test: /\.js$/,loader: 'babel?presets=es2015',exclude: /node_modules/},
            {test: /\.(jpg|png)$/, loader: "url?limit=512&name=./images/[name]-[hash].[ext]"},
        ]
    },
    vue: {
        loaders: {css: ExtractTextPlugin.extract("css")}
    },
    plugins: [
        new clean('build',{
            root: path.resolve(__dirname, '../../')
        }),
        new ExtractTextPlugin("css/[name].[contenthash].css",{
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../../app/index.html')
        })
    ]
}