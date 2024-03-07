/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo 
 associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 1-")
const area = function (num1, num2) {
  const result = num1 * num2
  return result
}
console.log("area", area(11, 12))
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è 
 il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 2-")
const crazySum = function (num1, num2) {
  if (num1 != num2) {
    return num1 + num2
  } else {
    return (num1 + num2) * 3
  }
}
console.log(crazySum(10, 10))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito 
 come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito 
 sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 3-")

const crazyDiff = function (num1) {
  if (num1 <= 19) {
    let absolute = num1 - 19
    return Math.abs(absolute)
  } else {
    let absolute = num1 - 19
    return Math.abs(absolute) * 3
  }
}
console.log(crazyDiff(30))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 4-")
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return console.log(true)
  } else return "false"
}
console.log(boundary(100))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 5-")

const epify = function (newString) {
  if (typeof newString === "string") {
    if (newString === "EPICODE") {
      return newString
    } else {
      let epicode = "EPICODE"
      return epicode.concat(" ", newString)
    }
  } else return console.log("non hai inserito del testo")
}

console.log(epify("EPICOD"))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come 
 parametro.
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 6-")
const check3and7 = function (numPos) {
  if (numPos > 0) {
    if (numPos % 3 === 0) {
      console.log(`${numPos} è multiplo di 3`)
    } else if (numPos % 7 === 0) {
      console.log(`${numPos} è multiplo di 7`)
    } else {
      console.log(`${numPos} Non è multiplo di 3 o di 7`)
    }
  }
}
check3and7(70)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa
  fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 7-")
const reverseString = function (agnirts) {
  return agnirts.split("").reverse().join("") //creo array vuoto con split lo inverto con reverse e con join trasformo il mio array in stringa
}
console.log(reverseString("marameo"))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da 
 diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 8-")
/*const upperFirst = function (string) {
  let arrayOfWords = []
  arrayOfWords = string.split(" ")
  console.log(arrayOfWords)

  for (i = 0; i < arrayOfWords.lenght; i++) {
    arrayOfLetters = arrayOfWords[i].split("")
    let firstLetter = arrayOfLetters[0].toUpperCase()
    arrayOfLetters.splice(0, 1, firstLetter)
    arrayOfWords[i] = arrayOfLetters.join("")
  }
  string = arrayOfWords.join(" ")
  console.log(string)
  return string
}
console.log(upperFirst("Ciao a tutti sono Federico"))*/

const upperFirst = function (string) {
  const lista = string.split(" ")
  let upper = ""
  for (let i = 0; i < lista.length; i++) {
    const word = lista[i].split("")
    for (let n = 0; n < word.length; n++) {
      if (n !== 0) {
        upper += word[n]
      } else {
        upper += word[n].toUpperCase()
      }
    }
    upper += " "
  }
  return upper
}
console.log(upperFirst("ciao a tutti sono federico"))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 9-")

const cutString = function (stringa) {
  stringa = stringa.slice(1, -1)
  return stringa
}
let stringa = cutString("peppino gigino")
console.log(stringa)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e 
 ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio10-")
const giveMeRandom = function (x) {
  const arrayOfRandomNumber = []
  for (let i = 0; i < x; i++) {
    randomNumber = Math.floor(Math.random() * 11)
    console.log(randomNumber)
    arrayOfRandomNumber.push(randomNumber)
  }
  return arrayOfRandomNumber
}
console.log(giveMeRandom(10))
