var gulp = require('gulp');

module.exports = function () {
	return gulp.src([
		global.dir.bootstrap + '/assets/fonts/**/*', 
		global.dir.sources + '/fonts/**/*'
	]).pipe(gulp.dest(global.dir.client + '/fonts'));
};