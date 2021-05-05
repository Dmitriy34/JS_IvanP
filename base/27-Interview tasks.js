// 27 - Задачи с собеседований на понимание основ

console.log('№1');
let x=5; console.log(x++);  //5
let y=5; console.log(++y);  //6

console.log('№2');
const aaa = []+false-null+true; /// NaN
const aac = false-null+true;    /// 1
console.log(aaa);
console.log(aac);
console.log(typeof(aaa));
console.log(typeof([] + false));
console.log([] + false - null);

console.log('№3');
let y = 1;
let x = y = 2;
console.log(x);           //=2

console.log('№4');
console.log([] + 1 + 2);  //= 12 -преобразование к строке

console.log('№5');
console.log('1'[0]);      //= 1

console.log('№6');
console.log(1 && 1 && null && 0 && undefined);  //null  -И (&&) запинается на лжи

console.log('№7');
console.log(!!(1 && 2) === (1 && 2));   //false

console.log('№8');
// Сначала приоритет операторов    // || запинается на правде         
console.log(null || 2 && 3 || 4);  // Сначала 2&&3= 3, null||3= 3,  3||4= 3

console.log('№9');
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b);        //false

console.log('№10');
console.log(+"Infinity");   //= Infinity

console.log('№11');
console.log("Ёжик" > "яблоко");  //false - смотри Unicode таблицу

console.log('№11');
console.log(0 || "" || 2 || undefined || true || false);