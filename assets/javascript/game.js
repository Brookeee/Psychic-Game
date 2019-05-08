var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var losses = 0; 
var wins = 0;
var guesses = [];
var guessesLeft = 10;
var guessesSoFar = []; // capture user input
var psyhicGuess;

document.onkeyup = function(event){
    var userChoice = event.key;

    guessesSoFar.push(userChoice);
    var psyhicResult = letters[Math.floor(Math.random() * letters.length)];
    
    if (userChoice === psyhicResult) {
        wins++;
        guesses;
    }
    else {
        guesses--;
    }
     if (guesses === 0) {
         losses++;
         guessesLeft -= 10;
     }
     document.getElementById('wins').innerHTML = "wins: " + wins;
     document.getElementById('losses').innerHTML = "losses: " + losses;
    //  document.getElementById('guesses').innerHTML = "Guesses : " + guesses;
     //document.getElementById('left').innerHTML = "Guesses Left: " + guessesLeft;
    }
    // function printKey(letters) {
        // if (guessesLeft == 10) {
            // document.getElementById("guesses").innerHTML += letters;
        
        // }
        // else {
            // document.getElementById("guesses").innerHTML =+ ", " + letters;
        // }
    // }