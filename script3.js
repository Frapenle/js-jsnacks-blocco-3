// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrayOne = [1, 2, 3, 4, 5, 6, 7];
const arrayTwo = [11, 33];
let arrayDiff;


if (arrayOne.length >= arrayTwo.length) {
    arrayDiff = parseInt(arrayOne.length - arrayTwo.length);
    console.log(arrayDiff)
} else {
    arrayDiff = parseInt(arrayTwo.length - arrayOne.length);
}