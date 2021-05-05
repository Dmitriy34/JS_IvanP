'use strict';

const personalMovieDB = {
    // Свойства
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    // Методы
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); //Если просто нажать ок/отмена, т.е ввести пустую строку будет 0
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько вы их оцените? (1-10)', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--; // Возврат на одну итерацию назад (т.е повторить текущую заново)
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        //if(personalMovieDB.privat == false){   //Мой вариант: 
        if (!hidden) { //Вариант урока: т.е если значение false --> true - значит показать DB
            console.log(personalMovieDB);
        } else {
            console.log('Privat == true');
        }
    },
    writeYourGenres: function () {
        //for (let i = 1; i <= 3; i++) {
        //TODO МОЙ вариант
        // let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        // if (genre != null && genre != '') {
        //     console.log(`Любимый жанр №${i} - это (${genre})`);
        //     personalMovieDB.genres[i - 1] = genre;
        // } else {
        //     i--; // Возврат на 1 итерацию назад. Просьба снова ввести значение
        //     console.log('Error: Любимый жанр не введен.');
        // }

        //TODO Вариант из урока
        // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // if (genre == null || genre == '') {
        //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //     i--;
        // } else {
        //     personalMovieDB.genres[i - 1] = genre;
        // }
        //}

        //TODO Альтернативный Вариант из урока  Задается только один вопрос.
        for (let i = 1; i < 2; i++) { //         TODO заменил i<=3 на i<2
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres == null || genres === '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(','); //! здесь НЕ НАДО ставить пробел до и после запятой, иначе работает как один элемент
                personalMovieDB.genres.sort(); //  console chrome:  personalMovieDB.writeYourGenres();
            }
        }

        //Вывод жанра и его номер
        console.log(personalMovieDB.genres);
        personalMovieDB.genres.forEach((item, i) => { // item- название жанров, i- его номер по порядку
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

//start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB(personalMovieDB.privat);
//personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);


// Почему, если в консоли вызывать эти же методы, после каждого обращения появляется "undefined"??? Смотри видео "24. Практика 4" 8:15"
// Потому, что метод console.log ничего не возвращает. После того как отработала пишет "undefined".