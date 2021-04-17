// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

/*
for (let i = 0; i <= 10; i = i + 1) {
    console.log(i);
}
*/
//TODO První ukol - WHILE
let i = 0;
while(i <= 10){
    console.log('while-prvni' + i);
    i = i + 1;
}


console.log('-------------------');


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

/*
for (let i = 0; i < 10; i = i + 1) {
    console.log('Proměnná i' + i);
}
*/
//TODO Druhý ukol - WHILE
let j = 0;
while(j < 10){
    console.log('while-druhy' + j);
    j = j + 1;
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0

console.log('Třetí příklad - sestupná řada 10 - 0');

/*
for (let i = 10; i >= 0; i = i - 1) {
    console.log('Proměnná i' + i);
}
*/
//TODO Třetí ukol - WHILE
let a = 10;
while(a >= 0){
    console.log('while-treti' + a);
    a = a - 1;
}

