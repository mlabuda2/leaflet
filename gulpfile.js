/*
var gulp   = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
*/

//poprawa szybkosci gulpa - wybiera tylko potrzebne pluginy
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var htmlDir = "docs/*.html",
    cssDir =  "docs/assets/stylesheets/*.css",
    jsDir = "docs/assets/js/*.js";

gulp.task('default', ['watch']);

gulp.task('html', function() {
  return gulp.src('docs/*.html')
    .pipe(gulp.dest('dist'));
});
/*
gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'));
});
*/
gulp.task('watch', function() {
  plugins.livereload.listen();
  gulp.watch(htmlDir, function(){
    gulp.src(htmlDir).pipe(plugins.livereload());
  });
  gulp.watch(cssDir, function(){
    gulp.src(cssDir).pipe(plugins.livereload());
  });
/*  gulp.watch(jsDir, function(){
    gulp.src(jsDir).pipe(livereload());
  }); */
  gulp.watch('docs/*.html', ['html']);

  plugins.connect.server({
    livereload: true,
    root: 'docs',
    directoryListing: true,
    defaultFile: 'responsivesite.html'
  });
});
