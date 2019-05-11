var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var loss = 0; 
var win = 0;
var guessesLeft = 10;
var guessesSoFar = []; // capture user input
var psychicGuess = psychicGuess;

function compGuess() { //computer letter choice
    psychicGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(psychicGuess);
}

  document.onkeypress = function(event) {
    var userChoice = event.key;

    // if user's key is correct, wins goes up by 1
    if (userChoice === psychicGuess) {
      win++;
      guessesLeft = 10;
      guessesSoFar = [];
      alert("We have a winner!");
    }
    // reset game/score after user wins, without reloading page.. 

    compGuess(); // guesses left decrementing when random word not correct
    if (userChoice !== psychicGuess) {
      guessesLeft--;
    }
    // if user's key incorrect, lossses go up by 1
    if (guessesLeft == 0) {
        loss++;
        guessesSoFar = []
        guessesLeft = 10;
        alert("Oh no! You lost. Try again!");
    }
    // reset game/score after user losses, without reloading page ..
    if (guessesSoFar.indexOf(userChoice) >=0) {

    } else { // log user's input for guessed letters
        guessesSoFar.push(userChoice);
        document.getElementById("playerGuess").innerHTML = guessesSoFar;
        console.log(guessesSoFar);
    }

      // log results
    document.getElementById("wins").textContent = win;
    document.getElementById("losses").textContent = loss;
    document.getElementById("guess").textContent = guessesLeft;
}