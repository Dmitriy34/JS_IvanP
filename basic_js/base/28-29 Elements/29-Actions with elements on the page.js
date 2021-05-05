// 29 Действие с элементами на странице

//TODO Использовать HTML в папке elements
"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

//console.dir(box);   // содержит style (Inline style для HTML) и многое другое

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borerRadius = '100%';
// circles.style.backgroundColor = 'red';   //! Ошибка, нужно указывать четко к какому элементу применить стиль
circles[0].style.backgroundColor = 'red';

// box.style.cssText =  'background-color:blue; width:500px';
const num = 500;
box.style.cssText =  `background-color:blue; width:${num}px`;

// применение сразу к нескольким элементам, с помощью перебора !!!Только если используется querySelectorAll
// через цикл for...of  или forEach

// редко используемый
// for (let i = 0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// создание элемента внутри только js и сохраняется только внутри js, на странице он не появится
const div = document.createElement('div');

const text = document.createTextNode('Тут был я');   //Ноды, это тоже самое что элементы

//изменение классов элементов
// не рекомендуется старое свойство !?  13:00"
div.classList.add('black');

//new стиль кода
//document.body.append(div);

const wrapper = document.querySelector('.wrapper');
//аналогично wrapper.append(div);   
document.querySelector('.wrapper').append(div);    // добавление элемента 'div' внутрь 'wrapper' последним элементом
document.querySelector('.wrapper').prepend(div);   // добавление элемента 'div' внутрь 'wrapper' первым элементом

hearts[0].before(div); //добавление перед элементом 'heart' элемента div
hearts[0].after(div);  //добавление после элемента  'heart' элемента div

//Удаление элементов
circles[0].remove();

//Замена элементов
hearts[0].replaceWith(circles[0]);


// Устаревшие команды
// новый append
wrapper.appendChild(div);

// новый before  after
wrapper.insertBefore(div, hearts[0]);   //вставка элементов, 1-вставка какого элемента, 2-перед каким элементом

// новый remove
wrapper.removeChild(hearts[1]);

// новый replace ( hearts[0].replaceWith(circles[0]); )
wrapper.replaceChild(circles[0], hearts[0]);

// wrapper.appendChild(div);   //нужен для след кода 26:10"
//div.innerHtml = "Hello world";   //вставка html
div.innerHtml = "<h1>Hello World!</h1>"

//div.textContent = "Content";                // создан только для текста
//div.textContent = "<h1>Hello World!</h1>";  // Будет передан как текст, кавычки обязательно

div.insertAdjacentHTML("beforebegin", '<h2>Hello123</h2>')  //вставка перед элементом
div.insertAdjacentHTML("beforeend", '<h2>Hello123</h2>')    //вставка после элемента
div.insertAdjacentHTML("afterbegin", '<h2>Hello123</h2>')   //вставка внутри в начале элемента
div.insertAdjacentHTML("afterend", '<h2>Hello123</h2>')     //вставка внутри в конце элемента

//TODO искать внутри какого элемента (внутри элемента wrapper)
wrapper.querySelectorAll('.heart');
