const str = "test";
const arr = [1, 2, 3, 4, 5];

console.log(str.length);     //=4
console.log(arr.length);     //=5

str.length;         // Это единственное свойство у строки
str.toUpperCase();  // Это метод (функция) у строки и () в конце обязательны

const fruit = "Some fruit";
console.log(fruit.indexOf("f"));     //= 5
console.log(fruit.indexOf("q"));     //= -1  (символ не найден)

const logg = "Hello world";
console.log(logg.slice(6, 11));     //= world   (7- с какого символа начать.  11- и до какого символа вырезать
console.log(logg.slice(-5, -1));     //= world   отсчет с конца строки
console.log(logg.substring(6, 11));  //= world
console.log(logg.substring(-5, -1));    //= пусто  Данный метод не принимает отрицательные значения 
console.log(logg.substr(6, 3));         //= wor    6- с какого символа НАЧАТЬ  3- КОЛИЧЕСТВО символов


//Числа  Math

const num = 12.2;
console.log(Math.round(num));     //округление

const test = "12.2px";
console.log(parseInt(test));        //= 12    перевод в число и обрезание до целого числа 
console.log(parseFloat(test));      //= 12.2  тоже самое только вернуть с десятичной частью
