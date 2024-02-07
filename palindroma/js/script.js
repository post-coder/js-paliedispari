/*

Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

*/

// parola palindroma: se letta al contrario risulta uguale


const checkButton =  document.querySelector("#check-button");

// memorizzo l'elemento per stampare il risultato
const resultElement = document.querySelector("#result");


checkButton.addEventListener("click", function() {

    // memorizzo la parola inserita
    const word = document.querySelector("#word").value

    if(isWordPalindrome(word)) {
        resultElement.innerText = "La parola è palindroma";
    } else {
        resultElement.innerText = "La parola non è palindroma";
    }
});



function isWordPalindrome(word) {


    
    // dichiaro una nuova variabile dove memorizzerò la parola invertita
    let invertedWord = "";

    // mi creo la parola inversa
    // creo il ciclo che scorre al contrario: parte dall'ultimo valore che mi serve e arriva allo 0
    for(let i = word.length - 1; i >= 0; i--) {
        
        invertedWord += word[i];

    }

    if(word === invertedWord) {
        console.log("Palindroma!");
        return true;
    } else {
        console.log("Non palindroma.");
        return false;
    }



}