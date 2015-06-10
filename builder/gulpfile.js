var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

var config = {
    sourceDir: '../src',
    publicDir: '../client'
};


gulp.task('clean', function () {
    return function (done) {
        del(config.publicDir, {
            force: true,
            dot: true
        },
        done);
    };
});

gulp.task('js-build',['clean'],function(){
    return gulp.src(config.sourceDir+'/js/*')
    .pipe(concat('scripts.js'))
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest(config.publicDir+'/js'));
});



gulp.task('default',['js-build']);

