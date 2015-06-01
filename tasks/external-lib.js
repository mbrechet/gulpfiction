var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function () {
	return gulp.src(global.dir.sources+'/js/libs/*')
		.pipe(uglify())
		.pipe(gulp.dest(global.dir.client+'/js/libs'));
};