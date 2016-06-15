var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');

module.exports = {
	entry: ['webpack-hot-middleware/client', path.resolve(__dirname, '../../app/app.js')],
	output: {
		path: path.resolve(__dirname, '../../dev'),
		filename: '[name].[hash].js'
	},
	resolve: {
        extensions: ['', '.js', '.vue']
    },
	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel?presets=es2015', exclude: /node_modules/}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../../app/index.html'),
			filename: 'index.html',
			inject: true
		})
	]
}