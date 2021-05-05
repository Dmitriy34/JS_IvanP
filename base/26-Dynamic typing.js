// 26 Динамическая типизация
"use strict";

// To String
// 1) 
console.log(String(null));        //= string
console.log(String(4));           //= 4

console.log(typeof(5 + ''));      //= string  (5 в виде строки)
console.log(typeof(null + ''));   //= string  (null в виде строки)

const num = 5;
console.log("https://vk.com/catalog/" + num);      //= "https://vk.com/catalog/5" 

const fontSize = 26 + 'px';     //= '26px'


// To Number
// 1) 
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));  //=number  (1-аргумент, 2-10-ая система исчисления)

let answ = +prompt("Hello", "");


// To Boolean
// False = 0, '', null, undefined, NaN
// True = все остальное
// 1)
let switcher = null;        // Элемент не задан на странице в начале страницы, кода
if (switcher){              // Код не выполнится
    console.log('Working...');
}

switcher = 1;               // Элемент получает значение (появляется)
if (switcher){              // Код выполнится
    console.log('Working...');
}

// 2 редких варианта
// 2)
console.log(typeof(Boolean('4')));
// 3)
console.log(typeof(!!'444'));  //= boolean
