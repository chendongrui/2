const gulp = require('gulp');
const uglify = require('gulp-uglify');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const sequence = require('gulp-sequence');
const min = require('gulp-minify');
gulp.task('server',['sass'],function(){
      connect.server({
          root:'./',
          port:8888,
          livereload:true
      })
      gulp.watch(['./index.html','./js/*.js','./dist/index.css'],['html']);
      gulp.watch('./scss/index.scss',['html']);
      gulp.watch('./js/*.js',['html']);
})
gulp.task('html',function(){
    gulp.src('./index.html').pipe(connect.reload());
})
gulp.task('sass',function(){
    gulp.src('./scss/index.scss').pipe(sass()).pipe(gulp.dest('dist'));
})
gulp.task('js',function(){
    gulp.src('./js/index.js').pipe(uglify()).pipe(gulp.dest('dist'));
})
gulp.task('js2',function(){
    gulp.src('./js/*.js').pipe(min()).pipe(gulp.dest('dist'));
})