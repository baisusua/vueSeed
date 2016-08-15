var express  = require('express');
var webpack  = require('webpack');
var config   = require('./config/dev');

var app      = express();
var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
});

app.use(devMiddleware);

app.use(hotMiddleware);

app.listen(3000, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:3000')
});