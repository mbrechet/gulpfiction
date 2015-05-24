module.exports = function(app) {
    app.models.Tarantinotheque.create([{
        'title' : 'Tarantinotheque',
        'id': 1
    }]);

     app.models.Movie.create([
        {
            'title' : 'Reservoir Dog',
            'id': 1,
            'description' : 'Reservoir Dogs est un film de gangsters américain réalisé par Quentin Tarantino et sorti en 1992. Il décrit une bande de truands et les événements qui surviennent avant et après un braquage raté.',
            'productionDate': '1992',
            'cover': '/img/data/movies/reservoir_dog_cover.jpg',
            'banner': '/img/data/movies/reservoir_dog_banner.jpg'
        },

        {
            'title' : 'Pulp Fiction',
            'id': 2,
            'description' : 'Pulp Fiction, ou Fiction pulpeuse au Québec, est un film de gangsters américain réalisé par Quentin Tarantino et sorti en 1994. Le scénario est co-écrit par Tarantino et Roger Avary',
            'productionDate': '1994',
            'cover': '/img/data/movies/pulp_fiction_cover.jpg',
            'banner': '/img/data/movies/pulp_fiction_banner.jpg'
        },

        {
            'title' : 'Jackie Brown',
            'id': 3,
            'description' : 'Jackie Brown est un film américain dramatique écrit et réalisé par Quentin Tarantino et sorti en 1997. C\'est la première fois que le réalisateur adapte un roman à l\'écran, en l\'occurrence Punch créole d\'Elmore Leonard sorti en 1992.',
            'productionDate': '1997',
            'cover': '/img/data/movies/jackie_brown_cover.jpg',
            'banner': '/img/data/movies/jackie_brown_banner.jpg'
        },
        {
            'title' : 'Kill Bill 1',
            'id': 4,
            'description' : 'Au cours d\'une cérémonie de mariage en plein désert, un commando fait irruption dans la chapelle et tire sur les convives. Laissée pour morte, la Mariée enceinte retrouve ses esprits après un coma de quatre ans. Celle qui a auparavant exercé les fonctions de tueuse à gages au sein du Détachement International des Vipères Assassines n\'a alors plus qu\'une seule idée en tête : venger la mort de ses proches en éliminant tous les membres de l\'organisation criminelle, dont leur chef Bill qu\'elle se réserve pour la fin.',
            'productionDate': '2003',
            'cover': '/img/data/movies/kill_bill_1_cover.jpg',
            'banner': '/img/data/movies/kill_bill_1_banner.jpg'
        }


        ]);
};