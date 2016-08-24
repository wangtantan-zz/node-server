'use strict'

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('serve', () => {
  $.nodemon({
    verbose: true,
    script: 'app.js',
    ext: 'js,json',
    ignore: [
      'node_module/*',
      'test/*',
      'gulpfiles',
    ],
    env: {
      'NODE_ENV': '',
      //'NODE_ENV': 'development',
      'NODE_CONFIG_STRICT_MODE': true,
    },
  });
});
