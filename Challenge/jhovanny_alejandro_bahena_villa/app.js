let inputName = document.getElementById('name-input');
let boton = document.getElementById('btn');

boton.addEventListener('click', () => {
    if (inputName.value.trim() == '') {
        inputName.style.background = 'red';
        alert('El input esta vacio');
    } else {
        alert(`Hola ${inputName.value}`);
    }
});

inputName.addEventListener('keydown', () => {
    event.target.style.background = 'white';
});


