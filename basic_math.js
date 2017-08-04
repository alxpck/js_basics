var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day. ');

var yearsAlive = 35;
var secondsPerYear = secondsPerDay * 365;
var ageInSeconds = yearsAlive * secondsPerYear;
document.write('You have been alive for ' + ageInSeconds + ' seconds.');