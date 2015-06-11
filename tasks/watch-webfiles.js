var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

module.exports = function () { 
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
	gulp.watch([global.dir.sources + '/**/*.html'], ['html', reload]);
	gulp.watch([global.dir.sources +  '/**/*.{scss,css}'], ['scss', reload]);

};
