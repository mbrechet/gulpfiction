module.exports = function(app) {
    app.models.Tarantinotheque.create([{
        'title' : 'Tarantinotheque',
        'id': 1
    }]);

     app.models.Movie.create([
        {
            'title' : 'Reservoir Dog',
            'id': 1,
            'description' : 'Reservoir Dogs est un film de gangsters am&eacute;ricain r&eacute;alis&eacute; par Quentin Tarantino et sorti en 1992. Il d&eacute;crit une bande de truands et les &eacute;v&eacute;nements qui surviennent avant et apr&egrave;s un braquage rat&eacute;. Premi&egrave;re r&eacute;alisation de Tarantino, ce film ind&eacute;pendant compte notamment Harvey Keitel, Tim Roth, Michael Madsen et Steve Buscemi dans sa distribution et introduit dans ses th&egrave;mes et son esth&eacute;tique ce qui deviendra la marque de fabrique de Tarantino : dialogues stylis&eacute;s, narration non lin&eacute;aire, r&eacute;f&eacute;rences &agrave; la pop culture, violence et langage vulgaire.<br /><br /> Tarantino avait &agrave; l\'origine l\'intention de le r&eacute;aliser en amateur avec des moyens tr&egrave;s limit&eacute;s mais l\'implication de Keitel dans le projet a permis &agrave; celui-ci de prendre plus d\'ampleur. Le film a connu un succ&egrave;s commercial modeste dans l\'absolu mais tr&egrave;s important pour son budget et fut tr&egrave;s bien accueilli par la critique. Pr&eacute;sent&eacute; en comp&eacute;tition lors de festivals de cin&eacute;ma, il a remport&eacute; plusieurs r&eacute;compenses.',
            'productionDate': '1992',
            'cover': '/img/data/movies/reservoir_dog_cover.jpg',
            'banner': '/img/data/movies/reservoir_dog_banner.jpg',
            'mainActors': 'Harvey Keitel, Tim Roth, Michael Madsen, Steve Buscemi'
        },

        {
            'title' : 'Pulp Fiction',
            'id': 2,
            'description' : 'Pulp Fiction, ou Fiction pulpeuse au Québec, est un film de gangsters américain réalisé par Quentin Tarantino et sorti en 1994. Le scénario est co-écrit par Tarantino et Roger Avary<br /><br />Il a &eacute;t&eacute; r&eacute;compens&eacute; par la Palme d\'or au Festival de Cannes 1994, ainsi que par l\'Oscar du meilleur sc&eacute;nario original l\'ann&eacute;e suivante, et a &eacute;t&eacute; un succ&egrave;s aussi bien critique que commercial, &eacute;tablissant ainsi d&eacute;finitivement la r&eacute;putation de Tarantino. Il est, selon le classement &eacute;tabli en 2007 par l\'AFI, le 94e meilleur film am&eacute;ricain de tous les temps. L\'AFI le classe &eacute;galement &agrave; la 7e place de sa liste des meilleurs films de gangsters. En 2013, le film est s&eacute;lectionn&eacute; par le National Film Registry pour &ecirc;tre conserv&eacute; &agrave; la Biblioth&egrave;que du Congr&egrave;s aux &Eacute;tats-Unis pour son &laquo; importance culturelle, historique ou esth&eacute;tique &raquo;.',
            'productionDate': '1994',
            'cover': '/img/data/movies/pulp_fiction_cover.jpg',
            'banner': '/img/data/movies/pulp_fiction_banner.jpg',
            'mainActors': 'John Travolta, Samuel L. Jackson, Bruce Willis, Uma Thurman'
        },

        {
            'title' : 'Jackie Brown',
            'id': 3,
            'description' : 'Jackie Brown est un film am&eacute;ricain dramatique &eacute;crit et r&eacute;alis&eacute; par Quentin Tarantino et sorti en 1997. C\'est la premi&egrave;re fois que le r&eacute;alisateur adapte un roman &agrave; l\'&eacute;cran, en l\'occurrence Punch cr&eacute;ole (Rum Punch) d\'Elmore Leonard sorti en 1992. Pam Grier a le r&ocirc;le principal. Le film est un hommage aux films de la Blaxploitation des ann&eacute;es 1970, plus particuli&egrave;rement les films Coffy, la panth&egrave;re noire de Harlem de 1973 et Foxy Brown de 1974, ces deux films ont pour interpr&egrave;te principal Pam Grier.<br /><br /> Le casting comprend comme r&ocirc;les secondaires Robert Forster, Robert De Niro, Samuel L. Jackson, Bridget Fonda et Michael Keaton. C\'est le troisi&egrave;me film de Tarantino apr&egrave;s les succ&egrave;s de Reservoir Dogs de 1992 et Pulp Fiction de 1994. Grier et Forster &eacute;taient, au moment de la sortie du film, des acteurs v&eacute;t&eacute;rans un peu pass&eacute; de mode qui n\'avaient plus eu de r&ocirc;les principaux depuis de nombreuses ann&eacute;es.',
            'productionDate': '1997',
            'cover': '/img/data/movies/jackie_brown_cover.jpg',
            'banner': '/img/data/movies/jackie_brown_banner.jpg',
            'mainActors': 'Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda'
        },
        {
            'title' : 'Kill Bill - Volume 1',
            'id': 4,
            'description' : 'Au cours d\'une cérémonie de mariage en plein désert, un commando fait irruption dans la chapelle et tire sur les convives. Laissée pour morte, la Mariée enceinte retrouve ses esprits après un coma de quatre ans. Celle qui a auparavant exercé les fonctions de tueuse à gages au sein du Détachement International des Vipères Assassines n\'a alors plus qu\'une seule idée en tête : venger la mort de ses proches en éliminant tous les membres de l\'organisation criminelle, dont leur chef Bill qu\'elle se réserve pour la fin.',
            'productionDate': '2003',
            'cover': '/img/data/movies/kill_bill_1_cover.jpg',
            'banner': '/img/data/movies/kill_bill_1_banner.jpg',
            'mainActors': 'Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah'
        },
        {
            'title' : 'Kill Bill - Volume 2',
            'id': 5,
            'description' : 'Le volume 2 s\'ouvre sur l\'arriv&eacute;e de Bill &agrave; la chapelle de Two Pines (&agrave; El Paso, Texas), &agrave; la grande surprise de la Mari&eacute;e, et une conversation s\'engage entre eux deux, la Mari&eacute;e confirmant &agrave; Bill, qui lui reproche sa soudaine disparition, qu\'elle arr&ecirc;te d&eacute;finitivement le m&eacute;tier de tueuse &agrave; gages. Peu apr&egrave;s, les autres membres du D&eacute;tachement International des Vip&egrave;res Assassines arrivent sur les lieux et commencent le massacre. Quatre ans plus tard, on retrouve Budd, le fr&egrave;re de Bill et &eacute;galement ancien partenaire de la Mari&eacute;e, qui travaille d&eacute;sormais comme videur dans un club de strip-tease et que Bill avertit qu\'il est le prochain sur la liste. <br /><br />La Mari&eacute;e vient pour le tuer durant la nuit, mais Budd, sur ses gardes, la surprend et lui tire dessus avec un fusil dont les cartouches sont charg&eacute;es de gros sel. Il t&eacute;l&eacute;phone ensuite &agrave; Elle Driver afin de lui vendre le katana de la Mari&eacute;e pour la somme d\'un million de dollars, et enterre vivante cette derni&egrave;re &agrave; l\'int&eacute;rieur d\'un cercueil. Un flashback montre ensuite Bill et la Mari&eacute;e, qui est alors aussi son amante, se rendant en Chine pour que la Mari&eacute;e suive l\'enseignement de Pai Mei, un l&eacute;gendaire ma&icirc;tre d\'arts martiaux aux m&eacute;thodes tr&egrave;s brutales. La Mari&eacute;e suit alors un long et difficile apprentissage avec Pai Mei et finit par gagner son respect.',
            'productionDate': '2004',
            'cover': '/img/data/movies/kill_bill_2_cover.jpg',
            'banner': '/img/data/movies/kill_bill_2_banner.jpeg',
            'mainActors': 'Uma Thurman, David Carradine, Michael Madsen'
        },
        {
            'title' : 'Boulevard de la mort',
            'id': 6,
            'description' : 'Boulevard de la mort (Death Proof) ou &Agrave; l\'&eacute;preuve de la mort (en version fran&ccedil;aise du Qu&eacute;bec) est un film am&eacute;ricain r&eacute;alis&eacute; par Quentin Tarantino faisant partie du diptyque Grindhouse, sorti le 6 juin 2007. Dans ce film construit en deux parties assez similaires, le r&eacute;alisateur rend hommage aux films d\'exploitation centr&eacute;s sur les poursuites en voitures des ann&eacute;es 1970 et les cascades sont r&eacute;alis&eacute;es &agrave; la mani&egrave;re de ces films, sans l\'aide de l\'infographie. Le film a &eacute;t&eacute; un &eacute;chec commercial mais a recueilli des critiques plut&ocirc;t positives.',
            'productionDate': '2007',
            'cover': '/img/data/movies/boulevard_de_la_mort_cover.jpg',
            'banner': '/img/data/movies/boulevard_de_la_mort_banner.jpg',
            'mainActors': 'Kurt Russell, Zoë Bell, Rosario Dawson'
        },
        {
            'title' : 'Inglourious Basterds',
            'id': 7,
            'description' : 'Inglourious Basterds, ou Le Commando des b&acirc;tards au Qu&eacute;bec, est un film de guerre uchronique germano-am&eacute;ricain &eacute;crit et r&eacute;alis&eacute; par Quentin Tarantino, sorti en 2009. L\'histoire se d&eacute;roule en France durant la Seconde Guerre mondiale et narre la vengeance d\'une jeune Juive, Shosanna Dreyfus (M&eacute;lanie Laurent), dont la famille a &eacute;t&eacute; assassin&eacute;e par les nazis ainsi que les plans d\'un commando de soldats juifs Alli&eacute;s men&eacute;s par le lieutenant Aldo Raine (Brad Pitt), envoy&eacute;s en Europe occup&eacute;e pour &eacute;liminer le plus de nazis possibles, qu\'ils s\'appliquent &agrave; scalper, avant de s\'attaquer avec succ&egrave;s &agrave; leurs dirigeants. Tarantino a commenc&eacute; &agrave; &eacute;crire le sc&eacute;nario du film plus de dix ans avant sa sortie mais, ayant des difficult&eacute;s &agrave; le terminer, a r&eacute;alis&eacute; Kill Bill et Boulevard de la mort avant d\'achever ce projet de longue date. <br /><br />Le film a &eacute;t&eacute; tourn&eacute; en France et en Allemagne &agrave; la fin de l\'ann&eacute;e 2008. Pr&eacute;sent&eacute; pour la premi&egrave;re fois en comp&eacute;tition officielle au Festival de Cannes 2009, le film a &eacute;t&eacute; un succ&egrave;s commercial et critique et a re&ccedil;u de multiples r&eacute;compenses, notamment &agrave; travers l\'acteur Christoph Waltz, qui a &eacute;t&eacute; honor&eacute; de nombreux prix pour son interpr&eacute;tation de l\'officier SS Hans Landa.',
            'productionDate': '2009',
            'cover': '/img/data/movies/inglourious_basterds_cover.jpg',
            'banner': '/img/data/movies/inglourious_basterds_banner.jpg',
            'mainActors': 'Brad Pitt, Mélanie Laurent,  Christoph Waltz , Michael Fassbender'
        },
        {
            'title' : 'Django Unchained',
            'id': 8,
            'description' : 'L\'action commence dans le Texas, en 1858 : une file d\'esclaves encha&icirc;n&eacute;s avance p&eacute;niblement sous la garde des fr&egrave;res Ace et Dicky Speck. En pleine nuit, le groupe croise le docteur King Schultz, qui voyage avec son ancienne roulotte de dentiste ambulant. Schultz, ignorant l\'hostilit&eacute; manifeste des Speck, demande aux prisonniers si l\'un d\'entre eux conna&icirc;t les d&eacute;nomm&eacute;s &laquo; fr&egrave;res Brittle &raquo; ; celui qui s\'av&eacute;rera &ecirc;tre Django r&eacute;pond par l\'affirmative. Mais lorsque Schultz insiste pour acqu&eacute;rir Django, Ace Speck le menace de son fusil. Schultz tue rapidement Ace, lib&egrave;re Django, et laisse les autres esclaves s\'occuper de Dicky. <br /><br />Une fois en ville, Schultz explique &agrave; Django qu\'il est un chasseur de primes et qu\'il doit ramener les fr&egrave;res Brittle, morts ou vifs ; malheureusement, Schultz ignore &agrave; quoi ressemblent ses proies, et il a donc besoin de quelqu\'un pour les lui montrer. Il propose &agrave; Django de l\'accompagner jusqu\'&agrave; ce qu\'ils aient retrouv&eacute; les Brittle ; leur travail accompli, Django sera libre et recevra m&ecirc;me quelques dollars. Django accepte. Les deux associ&eacute;s localisent les trois fr&egrave;res dans la plantation de Spencer Bennet ; ils acc&egrave;dent au domaine en se faisant passer pour des acheteurs esclavagistes, puis abattent les Brittle.',
            'productionDate': '2012',
            'cover': '/img/data/movies/django_unchained_cover.jpg',
            'banner': '/img/data/movies/django_unchained_banner.jpeg',
            'mainActors': 'Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Samuel L. Jackson'
        }


        ]);
};