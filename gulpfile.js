var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var config = {
	bootstrapDir: './node_modules/bootstrap-sass',
	publicDir: './client',
	releaseDir: './release/'
};


// scss link
gulp.task('scss',function(){
	return gulp.src('./src/sass/styles.scss')
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

gulp.task('external-lib',function(){
	return gulp.src('./src/js/libs/*')
	.pipe(uglify())
	.pipe(gulp.dest(config.publicDir+'/js/libs'));
});


gulp.task('external-plugins',function(){
	return gulp.src('./src/js/plugins/*')
	.pipe(uglify())
	.pipe(gulp.dest(config.publicDir+'/js/plugins'));
});

gulp.task('js-build',function(){
	return gulp.src('./src/js/*')
	.pipe(concat('scripts.js'))
	.pipe(uglify({mangle:false}))
	.pipe(gulp.dest(config.publicDir+'/js'));
});

gulp.task('default',['scss', 'fonts', 'js-build', 'external-lib', 'external-plugins']);