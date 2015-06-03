var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function () {
	return gulp.src('./src/sass/global/styles.scss')
		.pipe(sass({
			includePaths:[global.dir.bootstrap+ '/assets/stylesheets'],
			indentSynthax:true,
			errLogToConsole:true
		}))
		.pipe(gulp.dest(global.dir.client + '/css'));
};