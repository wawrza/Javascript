// plik funkcje.js

var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(12, 18),
    triangle3Area = getTriangleArea(15, 21);

function getTriangleArea(a, h) {
    if ( (a <= 0) || (h <= 0) ) {
        console.log('-1');
        return;
}return (a*h/2);
}
	console.log( getTriangleArea(10, 6) );
	console.log( getTriangleArea(10, 15) );
	console.log( getTriangleArea(12, 18) );
	console.log( getTriangleArea(15, 21) );
