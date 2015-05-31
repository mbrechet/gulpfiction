var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

var config = {
	bootstrapDir: './node_modules/bootstrap-sass',
	publicDir: './client',
	sourceDir: './src',
	releaseDir: './release/'
};

/*var tasks = [
	'clean',
	'image',
	'html', 
	'scss', 
	'fonts', 
	'external-lib', 
	'external-plugins', 
	'js-build'
];


// check all individual task-file in tasks folder and create a gulp-task (run-sequence friendly) with it
tasks.forEach(function (task) {
	gulp.task(task, require('tasks/' + task));
});*/

gulp.task('clean', del.bind(null, [config.publicDir], {dot: true}));

gulp.task('image', function(){
	return gulp.src(config.sourceDir + '/img/**/*')
    .pipe(gulp.dest(config.publicDir + '/img'));
});

gulp.task('html', function(){
	return gulp.src(config.sourceDir+'/html/**/*')
	.pipe(gulp.dest(config.publicDir+'/'));
});

// scss link
gulp.task('scss',function(){
	return gulp.src('./src/sass/global/styles.scss')
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
    return gulp.src([
    		config.bootstrapDir + '/assets/fonts/**/*', 
    		config.sourceDir + '/fonts/**/*'
    	])
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('external-lib',function(){
	return gulp.src(config.sourceDir+'/js/libs/*')
	.pipe(uglify())
	.pipe(gulp.dest(config.publicDir+'/js/libs'));
});


gulp.task('external-plugins',function(){
	return gulp.src(config.sourceDir+'/js/plugins/*')
	.pipe(uglify())
	.pipe(gulp.dest(config.publicDir+'/js/plugins'));
});

gulp.task('js-build',function(){
	return gulp.src(config.sourceDir+'/js/*')
	.pipe(concat('scripts.js'))
	.pipe(uglify({mangle:false}))
	.pipe(gulp.dest(config.publicDir+'/js'));
});

gulp.task('default',function(callback){
	runSequence(
	'clean',
	'image',
	'html', 
	'scss', 
	'fonts', 
	'external-lib', 
	'external-plugins', 
	'js-build', callback);
});
