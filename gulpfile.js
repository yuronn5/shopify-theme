const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('styles/main-styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
});

// gulp sass to runn

// Other tasks and configurations...

gulp.task('default', gulp.series('sass'));