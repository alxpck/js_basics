function getArea(width, length, unit) {
	var area = width * length;
	return area + " " + unit;
}

console.log( getArea(6, 17, 'sq feet') );