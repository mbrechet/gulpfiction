fs = require('fs');
module.exports = function(app) {
	app.get('/', function(req, res) {
	    res.sendFile('client/index.html', {
	    	root: __dirname + "/../../"
	    });
	});
	app.get('/movie/:id', function(req, res) {
		var id = req.params.id;
		app.models.Movie.findById(id, function (err, movie) {
			if (!err && movie) {
				var html = fs.readFileSync('client/movie.html').toString();
				html = html.replace(/\$\{movieTitle\}/g, movie.title);
				html = html.replace(/\$\{movieProductionDate\}/g, movie.productionDate);
				html = html.replace(/\$\{movieMainActors\}/g, movie.mainActors);
				html = html.replace(/\$\{movieBannerUrl\}/g, movie.banner);
				html = html.replace(/\$\{movieDescription\}/g, movie.description);
				res.send(html);
			}
		});
	  	
	});
};