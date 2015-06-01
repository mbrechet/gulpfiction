var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function () {
	return gulp.src(global.dir.sources+'/js/plugins/*')
		.pipe(uglify())
		.pipe(gulp.dest(global.dir.client+'/js/plugins'));
};