/* 
	&& AND operator
	Both conditions must be true to continue.
*/


/* 
	|| OR operator
	Either condition must be true to continue.
*/

/*
You can use as many operators in a statement as you want.
i.e. These all work: 
	
	if ( answer === 'yes' || answer === 'y' ) {}
	
	if ( answer === 'yes' || answer === 'y' && bool === true ) {}
	
	if ( answer === 'yes' || answer === 'y' && bool === true && score > 1000 ) {}

Each portion of the operator must be a full condition.

i.e. This works:
	if ( answer === 'yes' || answer === 'y' ) {}
This doesn't:
	if ( answer === 'yes' || 'y' ) {}
*/