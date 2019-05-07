var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var losses = 0; 
var wins = 0;
var guesses = 10;
var guessessofar = [];
var psyhicGuess;

document.onkeyup = function(event){
    var userChoice = event.key;

    var userGuess = letters[Math.floor(Math.random() * letters.length)];

    var answers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if (answers.indexOf(userChoice) > -1 {
        if (userChoice === userGuess) {
            wins++;
            guesses = 10;
            psyhicGuess = [];
        }
    }

    
            // var userChoice = " You guessed correct! ";
            // var wrongChoice = " Bummer! You guessed wrong ";

            // if userChoice {

        }

//var lettersfar = function() {
    //document.getElementById()//
//