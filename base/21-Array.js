"use strict";

// Массив - это структура элементов по порядку
const arr = [1, 2, 3, 5, 8];


arr.pop();      // Удаляет последний элемент в массиве
arr.push(10);   // Добавляет элемент в конец массива
console.log(arr);

//arr.shift();      //Удаляет первый элемент
//arr.unshift(10);  //Добавляет первый элемент
//Данные методы редко используются, потому что нужно переписывать индексы у всех элементов
console.log(arr);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//TODO: Цикл  for of
//Аналогичный цикл предыдущему, только записывается по другому
for (let value of arr){
    console.log(value);
}

console.log(arr.length);
//? Как соотносится метод length и порядковые номера в массиве
//  length - считает кол-во элементов по последнему индексу в массиве +1.
//  Нарушение правила подсчета элементов методом length:
arr[99] = 0;  
console.log(arr.length);    //= 100 элементов
console.log(arr);           //= [ 1, 2, 3, 5, 10, <94 empty items>, 0 ]


//TODO: Метод forEach() - позволяет перебрать все элементы в массиве
// Метод forEach() позволяет перебрать все элементы массива
// Внутри принимает еще  одну функцию callback
// Будет выполнятся каждый раз для каждого элемента массива
// 3 аргумента - item перебераемый элемент (название любое может быть)
// i - номер по порядку
// ссылка на массив который перебераем
arr.forEach(function(item, i ){
    console.log(`${i} внутри массива ${arr}`);
});


//TODO: Метод split
//const str = prompt("","");
//const products = str.split(", ");
//console.log(products);
//console.log(products.join("; "));


//Метод sort
//products.sort();
//console.log(products.join("; "));
// ввести в окне qqq, ddd, fff,  rrr, tttt
// 1,5,38,45,10,7,23

const arr3 = [3, 15, 27, 8, 10];
arr3.sort();
console.log("arr3", arr3);

const arr4 = arr3;
arr4.sort(compareNum);
console.log("arr4", arr4);

function compareNum(a, b){
    return a - b; 
}
