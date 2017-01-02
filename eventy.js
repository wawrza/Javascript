// plik eventy.js

var list = document.getElementById('Lista'),
    add = document.getElementById('addElem'),
    newElem = document.createElement('li'),
    index = document.getElementsByTagName('li');
    
    add.addEventListener('click', function plus(plus) {
        next = list.getElementsByTagName('li').length;
        list.innerHTML += '<li>item '+ next +'</li>';
        console.log(next);
});