/* Задания на 5 урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//1 Удалить рекламные баннеры
const adv = document.querySelectorAll('.promo__adv img')
adv.forEach(item => {
    item.remove();
});

//2 Изменить название жанра
//3 Изменить фон постера фильма
const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

genre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';
movieList.innerHTML = "";
movieDB.movies.sort();    // отсортировать массив по алфавиту

//console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) =>{
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
})