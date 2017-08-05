/* 
Quiz Application

1. Ask at least five questions.

2. Keep track of the number of questions the user answered correctly.

3. Provide a final message after the quiz letting the user know the number of questions he or she got right.

4. Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

alert('Pop quiz, sucker!');

// the five questions
var dog = prompt('What is the best kind of dog?');
var cat = prompt('What is the best kind of cat?');
var horse = prompt('Are horses expensive?');
var kids = prompt('Do you have kids?');
var pet = prompt('What kind of pet are you buying today?');

// tracking the answers
var correct = 0;

// logic
dog = dog.toLowerCase();
if (dog === 'mutt') {
	correct += 1;
}

cat = cat.toLowerCase();
if (cat === 'none' || cat === 'any') {
	correct += 1;
}

horse = horse.toLowerCase();
if ( horse === 'yes' || horse === 'y' || horse === 'hell yes!' ) {
	correct += 1;
}

// any answer is correct for kids
correct += 1;

pet = pet.toLowerCase();
if ( pet === 'dog' || pet === 'doggie' || pet === 'mutt' || pet === 'pooch' || pet === 'not a cat' || pet === 'cat' || pet === 'kitty' ) {
	correct += 1;
}

// determine crown level
var crown;
if (correct === 5) {
	crown = 'gold';
} else if (correct === 4 || correct === 3) {
	crown = 'silver';
} else if (correct < 3 && correct > 0) {
	crown = 'bronze';
} else {
	crown = 'no';
}

// send final message
document.write('<h2>You answered ' + correct + ' questions correctly, and get a ' + crown + ' crown.</h2><p>Don\'t forget to buy that ' + pet + '.</p>');

