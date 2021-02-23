//Declaration function
showText()  // Можно вызывать как до так и после создания функции

function showText(){
    console.log('Привет мир!');
}           

function summa(a, b){
    return a+b;
}
console.log(summa(4,5));    //вызов функции


//Expression function
const logger = function(){
    console.log("Hello!");
};          // В expression функциях в конце переменной-функции лучше ставить ;

logger();   // Вызывать нужно только после объявления функции


//Arrow function - Стрелочная функция
const calc = (a, b) => { return a + b }   
const calc = (a, b) => a + b;           // Если функция однострочная, return и {} можно опускать (не писать) в стрелочной функции

const calc = a => a + 2;                // Функция с одним аргументом
console.log(calc(5));

const calc = a => a == isNaN;           // Функция с одним аргументом
console.log(calc(5));                   //=False
