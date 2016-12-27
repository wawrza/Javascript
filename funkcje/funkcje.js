var a  = '2',
    h  = '4';
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(12, 18);
var triangle3Area = getTriangleArea(15, 21);
function getTriangleArea(a, h) {

	if ( (a <= 0) && (h <= 0) ) {
		console.log('Nieprawidłowe dane')
}
	return (a*h/2);
}
	console.log( getTriangleArea(10,6) )
