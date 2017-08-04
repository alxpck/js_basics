var num1 = prompt('Pick a number between 1 - 10');
var num2 = prompt('Pick another number 1- 10');
var total = Math.round(parseFloat(num1) + parseFloat(num2));

var randomNumber = Math.floor(Math.random() * total) + 1;
alert('Your random number is ' + randomNumber + '. ');
