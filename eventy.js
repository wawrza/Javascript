// plik eventy.js

var	list = document.getElementById('Lista'),
	add = document.getElementById('addElem'),
	newElem = document.createElement('li');

	add.addEventListener('click', function plus(plus) {
		newElem.innerHTML += '<li>item</li>';
		list.appendChild(newElem);
});
