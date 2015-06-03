var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require ('gulp-gzip');

module.exports = function () { 

	return gulp.src(global.dir.client + '/**/*')
        .pipe(tar('release.tar', {
        	mode:0755
        }))        
        .pipe(gzip())
        .pipe(gulp.dest(global.dir.release));       

};
