"use strict"

let a = 5,
    b = a;          //TODO Копирование значения примитивных типов

b = b + 5;
console.log(b);     // = 10
console.log(a);     // = 5


const obj = {
    a: 5,
    b: 1
};

const cope = obj;       //TODO Копирование ссылки на объект

cope.a = 10;  
console.log(cope);     //{ a: 10, b: 1 }
console.log(obj);      //{ a: 10, b: 1 }


//TODO Копирование объектов
function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

//TODO Поверхностная копия
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7, 
        y:4
    }
}

//TODO Копирование объекта (но только 1 уровня)
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(numbers);
// console.log(newNumbers);

//? Но объект "newNumbers.с" не был скопирован, а вместо него осталось ссылка на предыдущий объект
// newNumbers.c.x = 12;
// console.log(numbers.c);
// console.log(newNumbers);

//TODO   Object ...  - соединение несколько объектов вместе
const add = {
    d: 17,
    e: 20
};

//TODO создание независимо поверхностной копии объекта  - Object.assign()
//console.log(Object.assign(numbers, add));    //{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);       // { d: 17, e: 20 }
console.log(clone);     // { d: 20, e: 20 }


//TODO Копия массива (3й метод копирования)
const oldArray = ['a', 'b', 'c',];
const newArray = oldArray.slice();

newArray[1] = 'NNN';
console.log(newArray);
console.log(oldArray);


//TODO  Новый метод создания поверхностной копии ES6 и ES8  (Оператор разворота)
const video    = ['youtube', 'vimeo', 'rutube'];
const blogs    = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);    //['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook']


//TODO  Разложение массива на разные элементы
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);    //2  5  7  - на разных строчках


//TODO  Новый метод копирования массивов из ES8 
const array = ['a', 'b'];
const newArray3 = [...array];
console.log(newArray3);   //[ 'a', 'b' ]


//TODO  Новый метод копирования объектов из ES8 
const q = {
    one: 1,
    two: 2
}
const newObj = {...q};
