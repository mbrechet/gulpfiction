var gulp = require('gulp');
var replace = require('gulp-replace');
var ftp = require( 'vinyl-ftp' );

module.exports = function () { 

	//FTP connexion
	var connexionFTP = ftp.create( {
        host:     'gulpfiction.com',
        user:     'VincentVega',
        password: 'Ezechiel35'
    });

	//Globs	
	var sourcesForRelease = [

		//included files
		global.dir.client + '/**/*.js',
		global.dir.client + '/**/*.html',
		global.dir.client + '/**/*.css',

		//excluded file/folder are prepend by a "!"
		'!' + global.dir.client + '/devTools.js',
		'!' + global.dir.client + '/devToolsStyles.css'
	];

	gulp.src(sourcesForRelease)
		//Stream management
        .pipe(replace(/\$\{version\}/g, global.version))
        .pipe(gulp.dest(global.dir.release))
        .pipe(connexionFTP.dest('/public/'));     
         
};
