// plik ciagi.js

var	text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.",
	text2 = "Zielone słonie",
	text2UpperCased = text2.toUpperCase(),
	animal = text.slice(0,6),
	textChanged = text.replace("Papugi", "ZIELONE SŁONIE"),
	textChangedAfter = textChanged.substr(0,45);


	console.log(text2UpperCased);
	console.log(animal);
	console.log(textChanged.length);
	console.log(textChanged);
	console.log(textChangedAfter);