
// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];


document.onkeyup = function(event) {

// These are the game actions. Below represents the user's guess by using event.key. Gets the keyboard button that was pressed by the user.	
	var userGuess = event.key;

// This is how the computer's guess is randomized and "thought of" for the user to guess.
	var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// The options that the user and computer could choose from.
	var options = ("abcdefghijklmnopqrstuvwxyz").split("");
	
// The following are conditional statements to log the wins.
	if (options.indexOf(userGuess) > -1) {
		if (userGuess === computerGuess) {
			wins++;
			guessesLeft = 9;
			guessChoices = [];
		}

// Everytime the user guesses soemthing that doesn't match the computer's guess, the decrementer will lower the number of guesses left. 
		if (userGuess != computerGuess) {
			guessesLeft --;
			guessChoices.push(userGuess);	
		}

// If there are 0 guesses left and they didn't get the letter, the loss counter increases. This is also where the guesses that the user has made hare pushed.
		if (guessesLeft === 0) {
			guessesLeft = 9;
			losses ++;
			guessChoices = [];
		}	

// This is the body of the game and where the wins, losses, guesses left and guessed letters are written.
		var gameBody = 
		"<h1> The Psychic Game </h1>" +
		"<p>Guess what letter I'm thinking of:</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

		document.querySelector("#game").innerHTML = gameBody;

	}
};