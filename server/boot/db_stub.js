module.exports = function(app) {
    app.models.Tarantinotheque.create([{
        'title' : 'Tarantinotheque',
        'id': 1
    }]);

     app.models.Movie.create({
        'title' : 'Pulp Fiction',
        'id': 1,
        'description' : 'Pulp Fiction, ou Fiction pulpeuse au Québec, est un film de gangsters américain réalisé par Quentin Tarantino et sorti en 1994. Le scénario est co-écrit par Tarantino et Roger Avary',
        'productionDate': '1994',
        'cover': 'object'
    });
};