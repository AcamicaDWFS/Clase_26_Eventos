(function eventClick() {
    let buttonElement = document.getElementById("button-element"),
        inputElement = document.getElementById("input-element"),
        //inputElementValue = inputElement.value;
        counter = 0;
    //document.getElementById('input-element').value

    inputElement.style.backgroundColor = 'red';
    //buttonElement.addEventListener("click", msj => alert(`Hola ${inputElementValue}`));
    buttonElement.addEventListener("click", msj => alert(`Hola ${inputElement.value}`));
    inputElement.addEventListener("keyup", event => {
        if (counter > 0 && (inputElement.value == null || inputElement.value == '')) {
            inputElement.style.backgroundColor = 'red';
            alert('El input está vacío.');
        } else {
            inputElement.style.backgroundColor = 'white';
            counter = 0;
        }
        counter++;
    });
})();