//32 - Навигация по DOM - элементам, data-атрибуты, преимущество for_of

'use strict';

console.log(document.head);                // => Блок тега HEAD
console.log(document.documentElement);     // => Весь HTML
console.log(document.body.childNodes);     // => Вернет всех детей у BODY в виде массива NodeList
                                           // узел text - это может быть перенос строки, это тоже узел 
console.log(document.body.firstChild);     // => Вернет первый вложенный узел
console.log(document.body.lastChild);      // => Вернет последний вложенный узел

console.log(document.querySelector('#current').parentNode);     //=> Вернет родительский УЗЕЛ
console.log(document.querySelector('#current').parentElement);  //=> Вернет родительский ЭЛЕМЕНТ

//data атрибуты в HTML, получение узлов в HTML
//вернет следующий узел
console.log(document.querySelector('[data-current="3"]').nextSibling);
//вернет предыдущий узел
console.log(document.querySelector('[data-current="3"]').previousSibling);

//работа с элементами, (следующий и предыдущий элемент)
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// Перебор всех узлов, исключая перенос строки
for (let node of document.body.childNodes){
    if (node.NodeName == '#text'){
        continue;
    }
    console.log(node);
}