let button = document.getElementById('button');

let navigation = document.getElementById('menu');

let closeButton = document.getElementById('close-menu');

button.addEventListener('click', function() {
    navigation.classList.toggle('header__display-block');
});