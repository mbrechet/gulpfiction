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
				html = html.replace("${movieTitle}", movie.title);
				html = html.replace("${movieBannerUrl}", movie.banner);
				res.send(html);
			}
		});
	  	
	});
}