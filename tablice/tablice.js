// plik tablice.js

var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);
var newName ='Marian'

if (allNames.indexOf(newName) == -1) {

	var newName = allNames.push('Marian');
}