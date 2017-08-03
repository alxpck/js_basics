// Create a story-telling program:

// 1. Use the prompt() command several times to collect different types of words -- nouns, verbs, adjectives.
// 2. Store the result of each prompt() command in a different variable.
// 3. Combine the variables with other strings to create one or more non-sensical statements.
// 4. Print the resulting story to the browser using the document.write() command.


var name = prompt("Hi, want to play a game? Tell me your name.");

var noun = prompt("Ok " + name + ", let's play. Tell me a noun.");

var adj1 = prompt("Describe yourself (an adjective).");


var enemy = prompt("Tell me another name. The name of your enemy.");

var verb = prompt("Tell me what you want to do to your enemy (a verb past tense).");

var adj2 = prompt("Describe your enemy (an adjective).");
var adj3 = prompt("Describe them in more detail (another adjective).");

var message = "This is a story about " + name + ", The " + adj1 + " and the " + adj2 + ", " + adj3 + " " + enemy + ". On Tuesday, " + name + " " + verb + " " +enemy + " with a " + noun + ".";

document.write(message);

