function getRandomNumber(lower, upper) {
	var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
	return randomNumber;
}