/* 
The Random Number Guessing Game
Generates a number between 1 and 6
and gives the player two attempts to 
guess the number.
*/

// start with an incorrect (unmade) guess
var correctGuess = false;

// generate the random int between 1-6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

// prompt the user to guess a number
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* 
test to see if the player's guess is:
1. correct
2. guessed too high
3. guessed too low
*/

if ( parseInt(guess) === randomNumber ) {
	correctGuess = true;

} else if ( parseInt(guess) < randomNumber ) {
	
	var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
	if (parseInt(guessMore)  === randomNumber) {
		correctGuess = true;
	}

} else if ( parseInt(guess) > randomNumber ) {
	
	var guessMore = prompt('Try again. The number I am thinking of is less than ' + guess);
	if (parseInt(guessMore)  === randomNumber) {
		correctGuess = true;
	}

}

// test if the player guessed correctly and display the final message
if ( correctGuess ) {
	document.write('<p>You guessed the number!</p>');
} else {
	document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}


