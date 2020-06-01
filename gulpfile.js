const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("conscientstyle.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp
        .src([
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/popper.js/dist/umd/popper.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(concat("conscientstyle.min.js"))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src('./src/fonts/*.ttf')
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('mappings', function () {
    return gulp
        .src([
            './node_modules/jquery/dist/jquery.min.map',
            './node_modules/popper.js/dist/umd/popper.min.js.map',
            './node_modules/bootstrap/dist/js/bootstrap.min.js.map'])
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.stream());
});

gulp.task('build', gulp.parallel('sass', 'js', 'fonts', 'mappings'));