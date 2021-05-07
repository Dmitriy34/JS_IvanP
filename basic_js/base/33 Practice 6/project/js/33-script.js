/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики
'use strict';

// указываем что скрипту, нужно будет начать выполняться, только тогда 
// когда будет построена DOM структура, а не при полной загрузке всех элементов
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');             // Получение блок тегов формы
    const addInput = addForm.querySelector('.adding__input');       
    const checkbox = addForm.querySelector('[type="checkbox"]');    // Получение значение галочки под input
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();     // сброс стандартных событий браузера при нажатие на кнопку формы

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0,21)}...`   // обрезание строки до 21 символа
            }
            
            if (favorite){
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList); //19:30"
        }
        event.target.reset();           //очищаем форму //19:35"
        console.log(movieDB);
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {                            //5.1 Удалить рекламные баннеры
            item.remove();
        }); 
    }
    //deleteAdv(adv);

    const makeChanges = () => {
        genre.textContent = 'драма';                          //5.2 Изменить название жанра
        poster.style.backgroundImage = 'url("img/bg.jpg")';   //5.3 Изменить фон постера фильма
    };
    //makeChanges();

    const sortArr = (arr) =>{
        arr.sort();
    };
    //sortArr(movieDB.movies);
    //movieDB.movies.sort();                                 // отсортировать массив по алфавиту    
    
    function createMovieList(films, parent){                // Вывод и пронумерование массива на странице
        parent.innerHTML = "";
        sortArr(films);                                     //сортировка после удаления
        films.forEach((film, i) =>{                        
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        
        // Удаление выбранного элемента
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click',()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        });
    }

    deleteAdv(adv);
    makeChanges();
    //sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});


