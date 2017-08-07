function getRandomNumber(lower, upper) {
	if (isNaN(lower) || isNaN(upper)) {
		throw new Error('One of your arguments is not a number.');
	}

	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber(1, 12));
console.log(getRandomNumber(57, 69));
console.log(getRandomNumber(10000, 30000));
console.log(getRandomNumber("six", 5));
console.log(getRandomNumber(6, 3));
console.log(getRandomNumber(10, 1));