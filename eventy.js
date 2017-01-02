// plik eventy.js

var list = document.getElementById('Lista'),
    add = document.getElementById('addElem'),
    newElem = document.createElement('li');
    index = document.getElementsByTagName('li');
    
    add.addEventListener('click', function plus(plus) {
        newElem.innerHTML += '<li>item</li>' + [index.length];
        list.appendChild(newElem);
});
    console.log(index.length);