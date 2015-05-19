var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var config = {
	bootstrapDir: './node_modules/bootstrap-sass',
	publicDir: './client',
	releaseDir: './release/'
};


// scss link
gulp.task('scss',function(){
	return gulp.src('./client-src/sass/styles.scss')
	.pipe(sass({
		includePaths:[config.bootstrapDir+ '/assets/stylesheets'],
		indentSynthax:true,
		errLogToConsole:true
	})).pipe(
		gulp.dest(config.publicDir+'/css')
	).pipe(
		gulp.dest(config.releaseDir+'/css')
	);
});

// fonts link
gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('js-build',function(){
	return gulp.src('./client-src/js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest(config.publicDir+'/js'));
});

gulp.task('default',['scss', 'fonts', "js-build"]);