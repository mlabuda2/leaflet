// var gulp  = require('gulp'),
//     gutil = require('gulp-util');
//
// create a default task and just log a message
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });

var gulp   = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

var htmlDir = "docs/*.html";
var cssDir =  "docs/assets/stylesheets/*.css";
// var jsDir = "docs/assets/js/*.js";
// var cssDir2 =  "docs/assets/stylesheets/*.css";
// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(htmlDir, function(){
    gulp.src(htmlDir).pipe(livereload());
  });
  gulp.watch(cssDir, function(){
    gulp.src(cssDir).pipe(livereload());
  });
  // gulp.watch(jsDir, function(){
  //   gulp.src(jsDir).pipe(livereload());
  // });
  // gulp.watch('src/index.html', ['html']);
  // gulp.watch('docs/index.html', ['html']);
  connect.server({
    livereload: true,
    directoryListing: true,
    defaultFile: 'responsivesite.html'
  });
});

//livereload
// gulp.task('connect', function() {
//     connect.server({
//       livereload: true,
//       directoryListing: true,
//       defaultFile: 'index.html'
//     });
// });
