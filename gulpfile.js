'use strict';
   // this function is strict...

var gulp            = require('gulp'),
    rename          = require('gulp-rename'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify          = require('gulp-uglify'),
    notify          = require('gulp-notify'),
    // jade plugins
    jade            = require('gulp-jade'),
    plumber         = require('gulp-plumber'),
    merge           = require('merge-stream'),
    // CSS plugins
    postcss         = require('gulp-postcss'),
    rucksack        = require('gulp-rucksack'),
    csswring        = require('csswring'),
    sass            = require('gulp-sass');

// import the variables for the tasks and files, etc

var TASKS           = require('./gulp-config/tasks'),
    FILES           = require('./gulp-config/files');

// deveolpment style tasks
// --------------------------------------------------------
gulp.task(TASKS.dev.style, function () {
    return gulp.src(FILES.css.source)
        .pipe( sourcemaps.init() )
        .pipe( sass().on('error' , function (err) {
          notify({title: 'CSS Task'}).write(err.line  + ': ' + err.message);
          return this.emit('end')
        } ))
        .pipe( rucksack({autoprefixer: true, fallbacks: false }) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest(FILES.css.dest) );
});

gulp.task(TASKS.watch.style, function () {
    gulp.watch( FILES.css.all , [TASKS.dev.style]);
});

// jade
// --------------------------------------------------------
gulp.task(TASKS.dev.jade, function() {
  return gulp.src(FILES.jade.index)
      .pipe(jade({pretty: true}))
      .pipe( gulp.dest(FILES.jade.dest) );
})

// watch all
// --------------------------------------------------------

gulp.task(TASKS.watch.all, function () {
    gulp.watch( FILES.css.all, [TASKS.dev.style]);
    gulp.watch( FILES.jade.all, [TASKS.dev.jade]);
});

// production build
// --------------------------------------------------------
gulp.task(TASKS.production.js, function() {
    return gulp.src(FILES.js.source)
        .pipe( rename({suffix: '.min'}))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(FILES.js.dest));
});

gulp.task(TASKS.production.style, function (){
    return gulp.src(FILES.css.source)
        .pipe( plumber() )
        .pipe( sass().on('error', function (err) {
          notify({title: 'CSS Task'}).write(err.line + ': ' + err.message);
          return this.emit('end')
        } ))
        .pipe( rucksack({autoprefixer: true, fallbacks: false}) )
        .pipe( gulp.dest(FILES.css.dest) )
        .pipe( rename({suffix: '.min'}))
        .pipe( postcss([csswring]) )
        .pipe( plumber.stop() )
        .pipe( gulp.dest(FILES.css.dest) );     

});

gulp.task(TASKS.production.ready, [, TASKS.production.style, TASKS.production.js], function() {

});

gulp.task(TASKS.watch.production.all, function () {
    gulp.watch( FILES.css.all, [TASKS.production.style]);
    gulp.watch( FILES.js.source, [TASKS.production.js]);
});

// default
// --------------------------------------------------------
gulp.task(TASKS.default, [TASKS.dev.style, TASKS.dev.jade, TASKS.watch.all] );