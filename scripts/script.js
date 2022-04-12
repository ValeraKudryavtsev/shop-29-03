let button = document.getElementById('button');

let navigation = document.getElementById('menu');

button.addEventListener('click', function() {
    navigation.classList.toggle('display-block');
});