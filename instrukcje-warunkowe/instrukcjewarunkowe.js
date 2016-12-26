// plik instrukcjewarunkowe.js

var a = 2;
var b = 3;
var value = (a*a) + (2 * a * b) - (b*b);
if (value > 0) {

    console.log("wynik dodatni");

} 
else if (value < 0) {

	console.log("wynik ujemny");
}
if (value == 0) {

	console.log ("wynik jest równy zero")
}
else if ((value > 0) || (value < 0)) {

	console.log ('wynik nie jest równy zero')
}