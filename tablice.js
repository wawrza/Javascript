// plik tablice.js

var womenNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	menNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
	allNames = womenNames.concat(menNames),
	newName ='Marian';

if (allNames.indexOf(newName) == -1) {
	var newName = allNames.push('Marian');
}
	console.log(allNames)