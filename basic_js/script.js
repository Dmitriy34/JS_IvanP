'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const   a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько вы их оцените? (1-10)', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько вы их оцените? (1-10)', '');

personalMovieDB.movies[a]=b;
