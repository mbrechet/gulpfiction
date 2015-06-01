var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function () {
	return gulp.src(global.dir.sources + '/js/*')
		.pipe(concat('scripts.js'))
		.pipe(uglify({
			mangle:false
		}))
		.pipe(gulp.dest(global.dir.client + '/js'));
};
