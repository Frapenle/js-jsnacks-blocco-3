/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico 
 * randomico tra i due argomenti inclusi.
 */

function getRandomNumber(num1, num2) {
    const randomNum = Math.floor(Math.random() * (num2 - num1 + 1) + num1 );
    return randomNum;
}
const userNum = getRandomNumber(10, 40);
console.log(userNum);