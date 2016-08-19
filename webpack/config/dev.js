var path = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./webpack/dev-client', path.resolve(__dirname, '../../app/app.js')],
	output: {
        path: path.resolve(__dirname, '../../dev'),
        publicPath: '/',
        filename: 'index.js',
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
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../../app/index.html'),
            inject: true
        })
    ]
}