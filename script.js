let numberOfFilms;
let movies;
let lastFilm;
let rateFilm;


do {
    numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
    lastFilm = prompt("Один из последних фильмов?");
    rateFilm = prompt("На сколько оцените его?");
}
while(numberOfFilms == "" || lastFilm == "" || rateFilm == "" || lastFilm.length >= 50);

const personalMovieDB = {
    count : numberOfFilms,
    movies : null
}

personalMovieDB.movies = {
    lastFilm,
    rateFilm
}

console.log(personalMovieDB);