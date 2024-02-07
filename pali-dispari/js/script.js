/*

Pari e Dispari

L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

*/


const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function () {

    // memorizzo la scelta dell'utente
    // in caso l'abbia scritta con lettere maiuscole, le convertiamo in minuscolo
    const userChoice = document.querySelector("#user-choice").value.toLowerCase();
    // memorizzo il numero dell'utente
    const userNumber = Number(document.querySelector("#user-number").value);

    console.log(userChoice);
    
    // validazione per scelta
    if(userChoice != "pari" && userChoice != "dispari") {
        // solo quando c'è un errore

        alert('Hai inserito un valore sbagliato nella scelta, inserisci o "pari" o "dispari"')

    } else {
        // se la scelta va bene

        // controlliamo il numero
        if(isNaN(userNumber) || userNumber < 1 || userNumber > 5) {

            alert("Numero sbagliato, inserisci un valore tra 1 e 5");

        } else {
            // se tutto va bene


            // numero scelto casualmente dal computer
            const computerNumber = generateRandomNumber(5);
            console.log("Computer number", computerNumber)
            // scriviamolo in pagina
            document.getElementById("computer-choice").innerText = computerNumber

            // sommo i due numeri
            const sum = userNumber + computerNumber;
            console.log(sum)


            // controllo se la somma è pari o dispari
            const outcome = isEvenOrOdd(sum);

            
            const resultElement = document.querySelector("#result");

            if(userChoice == outcome)  {
                console.log("Hai vinto!");
                resultElement.innerText = `La somma è ${sum}, hai vinto!`;

                // aggiungiamo la classe per colorare lo sfondo di verde
                resultElement.classList.add("bg-success");
                // rimuoviamo la classe per lo sfondo rosso
                resultElement.classList.remove("bg-danger");
            } else {
                console.log("Hai perso");
                resultElement.innerText = `La somma è ${sum}, hai perso :(`;
                resultElement.classList.add("bg-danger");
                resultElement.classList.remove("bg-success");

            }
        }
    }



});




// funzione che genera un numero random da 1 a 5
function generateRandomNumber(maxNumber) {

    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    // restituisco il numero generato
    return randomNumber;

}


function isEvenOrOdd(number) {
    // restituirà una stringa, o "pari" o "dispari"

    if(number % 2 == 0) {
        // pari
        return "pari";
    } else {
        return "dispari";
    }
}