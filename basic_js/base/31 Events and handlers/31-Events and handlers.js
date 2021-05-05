//31 События и их обработчики
'use strict';
//Кусочек кода html для урока
/*
<body>
    <div class="overlay">
        <button id="btn">Нажми меня</button>
    </div>    
    <button id="btn">Нажми меня</button>
    <button id="btn">Нажми меня</button>    
    <a href="https://www.youtube.com/">https://www.youtube.com</a>
</body>
*/
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


//? 3 способа назначить обработчики событий 
/* 
? 1 способ:  html - атрибут
TODO: прочти не используется и НЕ рекомендуется к использованию, используется только при тестирование или подключение какой-нибудь метрики
<button  onclick = "alert('Click')"  id="btn"> Нажми меня </button>
*/

//? 2 способ:
//TODO: Такой способ, также почти не используется. 
//TODO: Проблема этого способа: Если использовать два раза один и тот же обработчик события (таким способом), 
//TODO то первое событие, пропадет и перезапишется вторым событием. 
//TODO И такие обработчики события нельзя будет удалить (например, чтобы можно было использовать 1 раз на странице )const btn = document.querySelector('button');
btn.onclick = function(){
    console.log('click');
};
btn.onclick = function(){
    console.log('Second click');
};

//? 3 способ
//TODO правильный способ  (слушатель за событием)
// btn.addEventListener('click', () => {   // click - название события, а не onclick; 2 аргументом callback функция
//     alert('One click');                 // callback - выполняется строго за другим функциями, сначала click потом alert 
// });
// btn.addEventListener('click', () => {
//     alert('Second click');
// });
//теперь будут обработаны оба события

//будет выполнятся каждый раз когда пользователь наводит мышку на элемент
// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// вывод типа события, какой код это вызвал
//btn.addEventListener('mouseenter', (event) => {
    //console.log('Hover');
    //console.log(event);  // все методы
    //console.log(event.target);    
//});

// let i = 0;
// const deleteElement = (e) => {   // чтобы удалять обработчики событий, функция должна быть точно такой же, а для этого вынесем ее в отдельную переменную
//     / /e.target.remove();
//     console.log(e.target);
//     / / i++;
//     / / if (i==1){
//     / /     btn.removeEventListener('click', deleteElement);
//     / / } 
// };  

//btn.addEventListener('click', deleteElement);   //12:30"
//btn.removeEventListener('click', deleteElement);

let i = 0;
const deleteElement = (e) => {   
    console.log(e.currentTarget);
    console.log(e.type);
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); 


//? Всплытие событий - это когда обработчик событий срабатывает сначала  
//? на самом вложенном элементе, затем на родителе и так далее.


//? Отмена стандартного поведения (событий ) браузера   //19:50"
link.addEventListener('click', (event)=>{
    event.preventDefault();     // необходимо помещать в самое начало кода (функции перед другими переписываемыми событиями)
    console.log(event.target);
});

const link = document.querySelector('a');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});  // {once: true} - используется, чтобы на при клике на каждый элемент, событие вызывалось один раз
});
