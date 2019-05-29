// Create computer choices
var letters = ["a","b","c"];

//["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

// Create variables to hold wins, losses, guesses left
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userGuess =[];
var computerGuess = null;

// Computer randomly pick an array
var updateComputerGuess = function() {
computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);
};

var updateGuessLeft = function() {
    document.querySelector("#guess-left").innerHTML = guessLeft;
};

var updateUserGuess = function() {
document.querySelector("#user-guess").innerHTML = userGuess.join(", ");
};

//Update functions
updateGuessLeft();
updateComputerGuess();

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

//Dettermine which key was pressed.
var letters = event.key.toLowerCase();
guessLeft--;

//Adding the guess to the userGuess array
userGuess.push(letters);

//Update functions
updateGuessLeft();
updateUserGuess();

// The logic determines the outcome of the game
if (userGuess !== computerGuess) {
alert("Try again")
}

if (userGuess === computerGuess) {
alert("You Win!")
document.querySelector("#wins-text").innerHTML = wins;
wins++;
reset();
}

if (guessLeft === 0) {
alert("You Lost")
document.querySelector("#losses-text").innerHTML = losses;
losses++
reset();
}
}

var reset = function() {
guessLeft = 9;
userGuess = [];
computerGuess = [];
updateComputerGuess();
updateGuessLeft();
updateUserGuess();
};