// plik petle.js

function rysujChoinke(row) {
	
	for (var i = 1; i <= row; i++) {
	var star = "";
  	for (var j = 0; j < i*2-1; j++) {
	star += '*';
    }
   	console.log(star);
    }
}

rysujChoinke(1);

rysujChoinke(2)

rysujChoinke(5);

