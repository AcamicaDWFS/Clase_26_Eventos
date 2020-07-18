/* Al pasar por encima del logo con el mouse crea un borde con sobre él.
Añade una clase con el mouseover y quitala con el mouseout. */
const logo = document.getElementById('logo');

logo.addEventListener('mouseover', () => {
    event.target.classList.add('border-logo');
});

logo.addEventListener('mouseout', () => {
    event.target.classList.remove('border-logo');
});


/* Con el click en el título pide al usuario que ingrese un texto a través de prompt.
- Reemplaza el título existente por el que ingresó el usuario.
- Almacena el título ingresado en el local storage
- Muestra siempre el último título ingresado (reinicia el navegador para probar) */
const header1 = document.getElementById('header-section1');

header1.addEventListener('click', () => {
    let head = prompt('Ingresa un encabezado');
    localStorage.setItem('headerStorage', head);
    event.target.innerHTML = localStorage.getItem('headerStorage');
});

header1.innerHTML = localStorage.getItem('headerStorage');


/* Duplica la fila de de 2 imágenes y 2 nombres con el click en ‘Ver más’. */
let btn_VerMas = document.getElementById('btn-vermas');

btn_VerMas.addEventListener('click', () => {
    let imgZone = document.getElementById('img-zone');
    let clone = imgZone.cloneNode(true);

    parentContainer = btn_VerMas.parentNode; /* parentNode encuentra el tag contenedor */
    parentContainer.insertBefore(clone, btn_VerMas); /* primer parametro de insertBefore es el elemento a insertar y el segundo parametro es el elemento de referencia para insertar */
});