var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

module.exports = function () { 

	// Load Browser Sync server with proxy conf
	browserSync({
		port:9000, ui:{ port:9001 }, 
		files: ['./../client/**/*'], proxy:'localhost:3000'
	});

	// Watch files for changes & reload
	gulp.watch([global.dir.sources + '/**/*.html'], ['html', reload]);
};
