'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: ["app"],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['app/**/*.*'])
    .on('change', browserSync.reload);
});

gulp.task('serve-test', () => {
  browserSync.init({
    notify: false,
    port: 8081,
    server: {
      baseDir: ["test", "app"],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['app/**/*.*'])
    .on('change', browserSync.reload);
});
