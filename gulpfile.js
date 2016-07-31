'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const karma = require('karma').server;
const server = require('gulp-live-server');

gulp.task('server', () => {
  const live = new server('server.js');
  live.start();
});

gulp.task('serve', ['server'], () => {
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

gulp.task('test-browser', () => {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  });
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
