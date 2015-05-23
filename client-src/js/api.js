(function(scope){
    scope.gulpfiction = scope.gulpfiction || {};
    scope.gulpfiction.urls = scope.gulpfiction.urls || {};
    scope.gulpfiction.urls.ALL_MOVIES  = '/api/movies';

    var getAllMovies = function(){
        var promise = new Promise(function(resolve,reject){
            var xhr  = new XMLHttpRequest();
            xhr.open('GET', scope.gulpfiction.urls.ALL_MOVIES);
            xhr.responseType='json';
            xhr.onreadystatechange = function(){
                if(this.readyState === 4){
                    if(this.status === 200){
                        resolve(this.response);
                    }else{
                        reject(this.response);
                    }
                }
            };

            xhr.send();
        });
        return promise;
    };

    var createHomeMovieItem = function(movie){
        var tpl = document.createElement('template');
        tpl.innerHTML = '<div class="fw-block-3">'+
              '<a href="/movie.html#movieId='+movie.id+'">'+
              '<img src="'+movie.cover+'" alt="'+movie.title+'">'+
              '  <span>'+movie.title+'</s+pan>'+
              '</a>'+
              '</div>';

        return  tpl.content; 
    };

    var generateHome = function(parent){

        
        getAllMovies().then(function(response){
            for(var i = 0; i< response.length; i++){
                var movie = response[i];
                parent.appendChild(createHomeMovieItem(movie));
            }
        }, function(){
            console.error('pb in data ');
        });
    };

    //scope.gulpfiction.generateHome = generateHome;
    var movieListContainer = document.getElementById('movieListContainer');
    if(movieListContainer){
        generateHome(movieListContainer);
    }
    
})(window);



