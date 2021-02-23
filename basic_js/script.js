'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //Если просто нажать ок/отмена, т.е ввести пустую строку будет 0

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

// const   a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько вы их оцените? (1-10)', ''),
//         c = prompt('Один из последних просмотренных фильмов?', ''),
//         d = prompt('На сколько вы их оцените? (1-10)', '');
// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[с]=d;
// console.log(personalMovieDB.movies);

for (let i = 0; i < 2; i++){
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько вы их оцените? (1-10)', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
        personalMovieDB.movies[a] = b;        
        console.log('done');
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    } else {
        console.log('error');
        i--;            // Возврат на одну итерацию назад (т.е повторить текущую заново)
    }
}

console.log(personalMovieDB);