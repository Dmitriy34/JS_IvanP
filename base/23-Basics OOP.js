"use strict";

let str = "some";            // string - тип строка примитивный тип
let strObj = new String();   // старый способ создание объекта 
console.log(typeof(str));     // str
console.log(typeof(strObj));  // object

str.toUpperCase;    // строка без методов это строка, когда вызываем метод, строка 
                    // преобразовывается в объект выполняет метод и результат возвращается в строку

console.dir([1, 2, 3]);  // --> см. в браузер
                         // __proto__ : Array и ниже наследуемые методы для массивов, наследуются от __proto__ : Object Array

const soldier = {
    health: 400,
    armor: 300,
    sayHello: function(){
        console.log("Hello");
    }
};

const john = {
    health: 100,
};

//Устаревший формат, можно увидеть в старых проектах, но не стоит использовать
john.__proto__ = soldier;
console.log(john);              //= 100б свое свойство
console.log(john.armor);        //= 300, свойство получил от родителя
console.log(john.sayHello);     //= "Hello"


//Новое свойство
Object.setPrototypeOf(john, soldier);        //1=Прототип, 2=Тот прототип, объект, от которого мы восстанавливаем связь
                                            // Установили прототип для "john" от "solider" (солдата)

const john1 = Object.create(soldier);   // Создали прототип объекта для "john" от "solider", чтоб имел доступ к свойствам, массивам и функциям от солдата
console.log(john1);         //={}    Пустой объект
console.log(john1.armor);   //= 300  взял от родителя