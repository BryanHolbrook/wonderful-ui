var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function() {
  gulp.src('index.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.tast('watch', function() {
  gulp.watch('index.css', ['styles']);
});
