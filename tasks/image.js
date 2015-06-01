var gulp = require('gulp');

module.exports = function () {
	return gulp.src(global.dir.sources + '/img/**/*')
    	.pipe(gulp.dest(global.dir.client + '/img'));
};