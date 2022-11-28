// Prendere due array della stessa lunghezza e generarne un terzo,
// prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const arrayOne = ["Marco", "Lavinia", "Carlos", "Giada", "Sebastiano", "Domenico"];
const arrayTwo = ["Rossi", "Frizzi", "Perez", "Gallitto", "Urban", "Montrone"];

const combineArray = [];

// for (let i = 0; i < arrayOne.length; i += 1) {
//     combineArray.push(arrayOne[i]);
//     combineArray.push(arrayTwo[i]);
// }

// console.log(combineArray);

// ====================
let i = 0;
while (i < arrayOne.length) {
    combineArray.push(arrayOne[i]);
    
    combineArray.push(arrayTwo[i]);
    i += 1
    console.log(arrayOne[i]);
}


console.log(combineArray);
