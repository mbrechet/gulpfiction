var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	bootstrapDir: './node_modules/bootstrap-sass',
	publicDir: './client'
};


// scss link
gulp.task('scss',function(){
	return gulp.src('./client/sass/styles.scss')
	.pipe(sass({
		includePaths:[config.bootstrapDir+ '/assets/stylesheets'],
		indentSynthax:true,
		errLogToConsole:true
	})).pipe(
		gulp.dest(config.publicDir+'/css')
	);
});

// fonts link
gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default',['scss', 'fonts']);