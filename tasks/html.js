var gulp = require('gulp');

module.exports = function () {
	return gulp.src(global.dir.sources + '/html/**/*')
		.pipe(gulp.dest(global.dir.client + '/'));
};