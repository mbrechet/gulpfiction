var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

var concat = require('gulp-concat');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

console.log(__dirname);
global.dir = {
	bootstrap: path.join(__dirname, 'node_modules', 'bootstrap-sass'),
	client: path.join(__dirname, 'client'),
	sources: path.join(__dirname, 'src'),
	release: path.join(__dirname, 'release')
};


var tasks = [
/*	'clean',	*/
	'html', 
	'scss', 
	'fonts', 
	'external-lib', 
	'external-plugins', 
	'image',
	'js-build',
	'release-assembly'
];

//create a task directly in gulpfile
gulp.task('clean', function () {
	return function (done) {
		del(global.dir.client, {
			force: true,
			dot: true
		},
		done);
	};
});

//OR check all individual task-file in tasks folder, and create a gulp-task with it
tasks.forEach(function (task) {
	gulp.task(task, require('./tasks/' + task));
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
		'js-build', 
		'release-assembly',
		callback
	);
});

gulp.task('faketask', require('./tasks/faketask'));

var browserSync = require('browser-sync');
var reload = browserSync.reload;
gulp.task('watch', function () {	
	browserSync({
		notify: false,
		port:9000,
		ui:{
			port:9001
		},
		logPrefix: 'Watching GulpFiction : ',
		files: ['./client/**/*'],
		proxy:'localhost:3000'
	});

	// Watch files for changes & reload
	gulp.watch([global.dir.sources + '/**/*.html'], ['html',reload]);
	gulp.watch([global.dir.sources +  '/**/*.{scss,css}'], ['scss', reload]);
});
