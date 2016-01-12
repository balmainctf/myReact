/**
 * Created by soraping on 15/12/31.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        port: 5858,
        root: './',
        livereload: true
    });
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect']);