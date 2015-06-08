var gulp = require('gulp');
var replace = require('gulp-replace');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

module.exports = function () { 

	var destForRelease = global.dir.release;

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

	//FTP connexion
	var connexionFTP = ftp.create( {
        host:     'gulpfiction.com',
        user:     'VincentVega',
        password: 'Ezechiel35'
    });

	

	return gulp.src(sourcesForRelease)

		//Stream management
        .pipe(replace(/\$\{version\}/g, global.version))
        .pipe(gulp.dest(destForRelease))
        .pipe(connexionFTP.dest('/public/'));        
         
};
