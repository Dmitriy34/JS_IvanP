//28 Получение элементов со страницы (DOM элементы)

//TODO Использовать HTML в папке elements
"use strict";

const box = document.getElementById('box');     //Получение элемента по id
console.log(box);

const btnsA = document.getElementsByTagName('button');      // Получение КОЛЛЕКЦИИ тега button
console.log();

const btnsB = document.getElementsByTagName('button')[1];   // Получение определенной 2 кнопки
console.log(btns[1]);    // Получение определенной 2 кнопки

const circles = document.getElementsByClassName('circle');
console.log(circles);


//TODO Новые методы получения элементов

const heartsA = document.querySelectorAll();

const heartsB = document.querySelectorAll('.heart');

heartsB.forEach(item =>{     // вывод элементов с классом .heart
    console.log(item);
})

const oneHeart = document.querySelector('.heart');  
console.log(oneHeart);          // выводит только 1ый элемент, который попадает под фильтр