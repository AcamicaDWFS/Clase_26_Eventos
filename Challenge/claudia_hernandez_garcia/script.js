const onClick = () => {
    const nameVal = nameInput.value;
    if (nameVal === '') {
        nameInput.style.backgroundColor = 'red';
        nameInput.style.color = 'white';
        alert('El capo esta vacio. Ingresa un nombre.');
        nameInput.addEventListener('keyup', updateValue);
    } else {
        alert('Hola ' + nameVal);
    }
};

function updateValue(e) {
    if (nameInput !== '') {
        nameInput.style.removeProperty('background-color');
        nameInput.style.removeProperty('color');
    }
}

var nameInput = document.getElementById('name');
const btn = document.getElementById('btn');
btn.addEventListener('click', onClick);