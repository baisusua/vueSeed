var gulp  = require('gulp');
var serve = require('browser-sync');
var gutil = require('gulp-util');
var fs    = require('fs');

gulp.task('watch',function () {
	serve({
        port   : process.env.PORT || 3000,
        open   : false,
        server : {baseDir: 'app'}
    });
    gutil.log(gutil.colors.red('server启动'));

    var reload = () => config.serve.reload();
})