'use strict';

let numberOfFilms;  

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');  //Если просто нажать ок/отмена, т.е ввести пустую строку будет 0

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
//start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько вы их оцените? (1-10)', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;        
            console.log('done');
        } else {
            console.log('error');
            i--;            // Возврат на одну итерацию назад (т.е повторить текущую заново)
        }
    }
}
//rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
//detectPersonalLevel();


function showMyDB(hidden){    
    //if(personalMovieDB.privat == false){   //Мой вариант: 
    if(!hidden){                             //Вариант урока: т.е если значение false --> true - значит показать DB
        console.log(personalMovieDB);
    } else { 
        console.log('Privat == true');
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for (let i=1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }    
}
writeYourGenres();