var answer = prompt('What programming language is the name of a gem?');

if ( answer.toUpperCase() === 'RUBY' ) {
	// === vs == 
	// https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

	document.write("<p>That's right!</p>");
} else {
	document.write("<p>I'm sorry Dave.</p>");
}