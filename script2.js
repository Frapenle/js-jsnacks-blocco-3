// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let arrayNums = [];
let sum = 0;

while (somma <= 50) {
    let userNumber = parseInt(prompt("Inserisci un numero minore di 50"));
    sum += userNumber;
    arrayNums.push(userNumber)

    if (sum > 50) {
        console.log("Numero troppo grande")
    }
}

console.log(sum);
console.log(arrayNums);