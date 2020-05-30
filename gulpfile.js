const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');

exports.build = function () {
    return gulp.src('src/components/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("conscientstyle.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
}