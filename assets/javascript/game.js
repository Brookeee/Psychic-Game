var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var losses = 0; 
var wins = 0;
var guesses = 10;
var guessessofar = [];
var psyhicGuess;

document.onkeyup = function(event){


var letterGuess = function() {
    psyhicGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}

//var lettersfar = function() {
    //document.getElementById()//
}//