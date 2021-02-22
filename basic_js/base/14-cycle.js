"use strict";
console.log(' Цикл while');
let numA = 50;
while ( numA<55 ){
    console.log(numA);
    numA++;
}


console.log('\n Цикл Do .. While');
let numB = 50;
do {
    console.log(numB);
    numB++;
}
while (numB<55);


console.log('\n Цикл For');
let numC = 50;
for (let i=1; i<8; i++){
    console.log(numC);
    numC++;
}

console.log('\n Цикл For (break)');
let numD = 50;
for (let i=1; i<10; i++){
    if(i==6){
        break;
    }
    console.log(i);    
}

console.log('\n Цикл For (continue)');
let numE = 50;
for (let i=1; i<10; i++){
    if(i==6){
        continue;
    }
    console.log(i);    
}