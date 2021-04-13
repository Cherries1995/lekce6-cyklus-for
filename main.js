// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

let osudi = []

//TADY NAPIS CYKLUS

console.log('-------------------');

for (let i = 0; i <= 10; i = i + 1) {
    osudi.push(i);
}

console.log(osudi)

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

let osudiDva = []

console.log('Druhý příklad - rozdíl mezi <= a <' + osudi );

//TADY NAPIS CYKLUS
for (let i = 0; i < 10; i = i + 1) {
    osudiDva.push(i);
}

console.log(osudiDva);



// Třetí příklad - vypiš sestupně čísla od 10 do 0

let osudiSestupne = []

console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

for (let i = 10; i > 0; i = i - 1) {
    osudiSestupne.push(i);
}

console.log(osudiSestupne);