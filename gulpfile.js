//Generic dependencies
var del = require('del');
var fs = require('fs');
var path = require('path');

//Gulp dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

//globals
global.dir = {
	bootstrap: path.join(__dirname, 'node_modules', 'bootstrap-sass'),
	client: path.join(__dirname, 'client'),
	sources: path.join(__dirname, 'src'),
	release: path.join(__dirname, 'release')
};

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
var tasks = ['sound','html', 'scss', 'fonts', 'external-lib', 'external-plugins', 'image','js-build','release-assembly'];
tasks.forEach(function (task) {
	gulp.task(task, require('./tasks/' + task));
});

//Default task : run a sequence of task
gulp.task('default',function(callback){
	runSequence(
		'sound',
		'clean',
		['image','html'], 
		'scss', 
		'fonts', 
		['external-lib', 'external-plugins'],		 
		'js-build', 
		'release-assembly',
		callback
	);
});


//other tasks for demo
gulp.task('faketask', require('./tasks/faketask'));
gulp.task('watch-webfiles', require('./tasks/watch-webfiles'));


