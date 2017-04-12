/*
-Instalacja z devDependencies:
npm install --save-dev
-Jak używać:
przedrostek 'plugins.' przy nazwie pluginu
*/

/* Poprawa szybkosci gulpa - wybiera tylko potrzebne pluginy*/
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

gulp.task('lint', function () {
   return gulp.src('docs/assets/js/*.js')
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'));
      // .pipe(uglify())
      // .pipe(concat('app.js'))
      // .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  plugins.livereload.listen();
  gulp.watch(htmlDir, function(){
    gulp.src(htmlDir).pipe(plugins.livereload());
  });
  gulp.watch(cssDir, function(){
    gulp.src(cssDir).pipe(plugins.livereload());
  });
  gulp.watch(jsDir, ['lint'], function(){
    gulp.src(jsDir).pipe(plugins.livereload());
  });
  gulp.watch('docs/*.html', ['html']);

  plugins.connect.server({
    livereload: true,
    root: 'docs',
    directoryListing: true,
    defaultFile: 'responsivesite.html'
  });
});

gulp.task('git',  function(){
  return gulp.src('.')
    .pipe(plugins.git.add({args: '--all'}))
    .pipe(plugins.git.commit('auto-commit-gulp'))
    plugins.git.push('origin', ['master'], function(err) {
    if (err) throw err;
  });
});