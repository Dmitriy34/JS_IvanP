"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function(){ console.log("Test"); },
};

//console.log(options.name);
//delete options.name;
//console.log(options);

// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }    
// }

//? Количество до создания ключ makeTest
//console.log(counter);     //5
//console.log(counter);   //3 если первый counter убрать

console.log(Object.keys(options).length);   //['name','width','height','colors']
                                            //Получаем массив, значит можем и применить метод length

options.makeTest();  //Наш метод (функция). () - вызываем метод

//TODO Деструктуризация объектов
const {border, bg} = options.colors;
console.log(border);
console.log(bg);


console.dir(String);   // Чтобы посмотреть методы для строки