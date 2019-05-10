var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var losses = 0; 
var wins = 0;
var guessesLeft = 10;
var guessesSoFar = [""]; // capture user input
var psychicGuess;

  document.onkeypress = function(event) {
    var userChoice = event.key;

    // guessesSoFar.push(userChoice);
    var psychicGuess = letters[Math.floor(Math.random() * letters.length)];

    if (userChoice === psychicGuess) {
      wins++;
      guessesLeft = 10;
      guessesSoFar = [""];
    // if user's key is correct, wins goes up by 1
    } else if (guessesLeft == 0) {
      losses++;
      guessesLeft = 10;
      guessesSoFar = [""];
      // if users key is incorrect, losses go up by 1

    } if (userChoice !== psychicGuess) {
      guessesLeft--;
      // guesses left decrementing
    }
  }
    document.getElementById("wins").innerHTML + wins;
    document.getElementById("losses").innerHTML + losses;
    document.getElementById("left").innerHTML + guessesLeft;
    document.getElementById("guesses").innerHTML + guessesSoFar;