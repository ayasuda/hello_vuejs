var gulp       = require('gulp')
var browserify = require('browserify')
var source     = require('vinyl-source-stream')
var karma      = require('karma').Server

gulp.task('build', function() {
  browserify({
    'entries': ['./main.js']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./'))
})

gulp.task('test', function() {
  runner = new karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  })
  runner.start()
})

gulp.task('default', ['build']);
