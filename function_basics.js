function goToCoffeeShop() {
	alert('Espresso is on the way!');
}

goToCoffeeShop();



function alertRandom() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	alert(randomNumber);
} 

alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();


// function expression

var functionExpression = function() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	alert(randomNumber);	
}; 

functionExpression();