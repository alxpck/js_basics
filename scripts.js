function getRandomNumber() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
} 

alert(getRandomNumber());
console.log(getRandomNumber());
var randomNumber = getRandomNumber();
document.write('<p>' + randomNumber + '</p>');


// returning booleans based on conditional logic
function isEmailEmpty() {
	var field = document.getElementById('email');
	if (field.value === '') {
		return true;
	} else {
		return false;
	}
}

// check to see if the email is empty
var fieldTest = isEmailEmpty();

// if email is empty alert the user to enter an email
if (fieldTest === true) {
	alert('Please enter an email address.');
}
