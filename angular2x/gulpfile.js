/*global require*/
//var gulp = require('gulp'),
//    ts = require('gulp-typescript');

/*gulp.task('default', function () {
    'use strict';
    gulp.src('./lib/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dist/'));
});*/

//gulp.task('default', function () {
//  var tsResult = gulp.src('**/*.ts')
//    .pipe(ts({
//        noImplicitAny: false,
//        out: 'app.js',
//        emitDecoratorMetadata: true
//      }));
//  return tsResult.js.pipe(gulp.dest('/'));
//});

var gulp = require('gulp');

var typescript = require('gulp-tsc');
 
gulp.task('default', function(){
  gulp.src(['**/*.ts'])
    .pipe(typescript({
   "target": "es5",
    "module": "commonjs",
    "declaration": false,
    "noImplicitAny": false,
    "removeComments": true,
    "noLib": false,
    "emitDecoratorMetadata": true,
    "sourceMap": true,
    "listFiles": true,
    "outDir": "dist"
//    "experimentalDecorators": true
  }))
    .pipe(gulp.dest('app.ts'))
});