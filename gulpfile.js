/*
-Instalacja z devDependencies:
npm install --save-dev
-Jak używać:
przedrostek 'plugins.' przy nazwie pluginu
*/

/* Poprawa szybkosci gulpa - wybiera tylko potrzebne pluginy */
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var htmlDir = "docs/*.html",
    cssDir =  "docs/assets/stylesheets/*.css",
    jsDir = ["docs/assets/js/*.js", 'gulpfile.js'];

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

/* GULP-GIT PLUGIN
możliwy bug node:Regex
rozwiazanie: dodać to do screen-manager.js :
cliWidth.defaultWidth = 80;


Git Add */
gulp.task('add', function(){
    return gulp.src('.')
    .pipe(plugins.git.add({args: '--all'}))
});

/* Git Add + Git Commit z unikalnym komentarzem */
gulp.task('commit', ['add'], function(){
    // just source anything here - we just wan't to call the prompt for now
    gulp.src('package.json')
    .pipe(plugins.prompt.prompt({
        type: 'input',
        name: 'commit',
        message: 'Wprowadź komentarz do commita...'
    },  function(res){
      /* Pliki do commitowania... trzeba w ten sposób bo prompt nie do końca działa z pipe'ami */
      return gulp.src([ '!node_modules/','!dist', '!test.html', '!testcss.css', './*' ], {buffer:false})
      .pipe(plugins.git.commit(res.commit));
    }));
});

/* Git Add + Commit + Push */
gulp.task('push', function(){
    plugins.git.push('origin', ['master'], function(err) {
      if (err) throw err;
    });
});

