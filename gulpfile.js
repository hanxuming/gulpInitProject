var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('testLess', function () {
    gulp.src(['less/**/*.less','less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('css/'));
});
gulp.task('testWatch', function () {
    gulp.watch('less/**/*.less', ['testLess']);
});