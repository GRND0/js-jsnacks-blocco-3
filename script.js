/*const arrayUno = [1, 2, 3, 4, 5];
const arrayDue = [1, 2, 3];


if (arrayUno.length > arrayDue.length) { 
    for (i = 1; i < (arrayUno.length - arrayDue.length); i++) {
        arrayDue.push(numeroRandom(100, 0));
    }
} else if (arrayDue.length > arrayUno.length) {
    for (i = 1; i < (arrayDue.length - arrayUno.length); i++) {
        arrayUno.push(numeroRandom(100, 0));
    }
}



console.log(arrayUno, arrayDue);


function numeroRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} */


//snack 2

const arrayNumeri = [] ;
let sommaArray = 0 ; 
do {
     numeroInserito = parseInt(prompt("Inserisci un numero")) ;
     arrayNumeri.push(numeroInserito) ;
    sommaArray = sommaElementi(arrayNumeri) ;

} while (sommaArray <= 50) ;





function sommaElementi(array) {
    console.log(array.length);
    let somma = 0 ;
    for (let i = 0; i < array.length; i++) {
        somma += array[i] ;
    }
return somma
}

