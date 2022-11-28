// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrayOne = [1, 2, 3, 4, 5, 6, 7];
const arrayTwo = [11, 33, 9, 44, 5, 55, 23, 1, 2, 3, 4, 5, 6, 7];

//---- mi son perso----
// let arrayDiff;
// if (arrayOne.length >= arrayTwo.length) {
//     arrayDiff = (arrayOne.length - arrayTwo.length);
//     console.log(arrayDiff);
// } else {
//     arrayDiff = arrayTwo.length - arrayOne.length;
//     console.log(arrayDiff);
// }

while (arrayOne.length > arrayTwo.length) {
    arrayTwo.push(4);
}

while (arrayTwo.length > arrayOne.length) {
    arrayOne.push(1)
}
console.log(arrayOne);
console.log(arrayTwo);