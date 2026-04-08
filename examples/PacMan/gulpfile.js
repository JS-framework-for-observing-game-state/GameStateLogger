const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const removeCode = require('gulp-remove-code');

function styles() {
  return gulp
    .src('styles/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build'));
}

function scripts() {
  return gulp
    .src('app/scripts/**/*.js')
    .pipe(removeCode({ production: true }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
}

function watch() {
  gulp.watch('styles/**/*.scss', styles);
  gulp.watch('app/scripts/**/*.js', scripts);
}

const build = gulp.parallel(styles, scripts);

exports.watch = watch;
exports.default = build;
