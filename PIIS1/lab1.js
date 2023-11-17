let numberOfFilms = 0;
let lastWatchedFilm;
let lastWatchedFilmRate = 0;

do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', " ");
    lastWatchedFilm = prompt('Один из последних просмотренных фильмов?');
    lastWatchedFilmRate = prompt('На сколько оцените его?'); 
} while (numberOfFilms == " " || lastWatchedFilm == null || lastWatchedFilmRate == null || lastWatchedFilm.length > 50);

alert('Вы посмотрели ' + numberOfFilms + ' фильмов!');
alert('Последний просмотренный фильм - ' + lastWatchedFilm);
alert('Вы оценили его на ' + lastWatchedFilmRate);
 
const personalMovieDB = {
    count: numberOfFilms,
    movies: null 
}
personalMovieDB.movies = {lastWatchedFilm, lastWatchedFilmRate};

console.log(personalMovieDB);