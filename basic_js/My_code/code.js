// Цикл по перебору элементов объекта
const question = {
    a : 'Сколько фильмов вы уже посмотрели?',    
    b : 'Один из последних просмотренных фильмов?',
    c : 'На сколько вы их оцените(1-10)?',
}
console.log( Object.keys(question).length );


//Цикл выше + Цикл занесение ответов в массив
let answer = [];
for (let key in question){
    let answerTemp = prompt(`${question[key]}`);    
    console.log(question[key], " : ", answerTemp);   
    answer[question[key]] = answerTemp;
}
console.log(answer);