//Agregar elemento a la lista
document.getElementById('lista').innerHTML += '<li class="item"><a href="#"> Item 5</a></li>';

//Agregar negrita a una palabra del parrafo
const parrafo = document.querySelector('p').innerHTML;
const negritas = parrafo.replace('Tactical', '<b>Tactical</b>');
document.querySelector('p').innerHTML = negritas;

//Intercambiar imagen cada 10 segundos
let imagenesArticuloArray = ['https://wallpapercave.com/wp/rC9PiGj.jpg',
    'https://i.ytimg.com/vi/fYF3QIjk-A4/maxresdefault.jpg',
    'https://i.ytimg.com/vi/CzDRSmnedGk/maxresdefault.jpg'];
let i = 0;
onload = function () {
    setInterval(() => {
        document.getElementById('article-img').src = imagenesArticuloArray[i % imagenesArticuloArray.length];
        i++;
    }, 2000);
}
//Intercambiar imagenes
document.getElementById('perfil-img1').src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffa%2Fe9%2Ff5%2Ffae9f51c162e0cc65dfe79c1e98f97e6.jpg&f=1&nofb=1';
document.getElementById('perfil-img2').src = 'https://s-media-cache-ak0.pinimg.com/originals/5b/64/36/5b64366ff945cf2cb2e3dbed230945b0.jpg';

let perfilOne = document.getElementById('perfil-img1').src;
let perfilTwo = document.getElementById('perfil-img2').src;

let aux = perfilOne;
perfilOne = perfilTwo;


document.getElementById('perfil-img1').src = perfilTwo;
document.getElementById('perfil-img2').src = aux;

//Al pasar por encima del logo con el mouse crea un borde con sobre él.
let logo = document.getElementById('logo');
logo.addEventListener('mouseover', () => { logo.style.border = "solid 3px grey"; });
logo.addEventListener('mouseout', () => { logo.style.border = "none"; });

//Reemplazar el título
let leTitle = document.getElementById('mainTitle');
if (localStorage.getItem('keyTitle')==null) {
    localStorage.setItem('keyTitle', 'Battlecruiser');
    document.getElementById('mainTitle').innerHTML = localStorage.getItem('keyTitle');
}else{
    document.getElementById('mainTitle').innerHTML = localStorage.getItem('keyTitle');
}
leTitle.addEventListener('click',()=>{
    let newTitle = prompt('Ingresa el nuevo titulo: ');
    localStorage.setItem('keyTitle', newTitle);
    document.getElementById('mainTitle').innerHTML = localStorage.getItem('keyTitle');
})

//clonar nodo
let clonarPerfiles = document.getElementById('clonar-btn');
clonarPerfiles.addEventListener('click', () => {
    let i = 1;
    let id = document.getElementById('clonarPerfil');
    let clon = id.cloneNode(true);
    clon.style.id = 'clonarPerfil' + i;
    i++;
    id = document.getElementById('clonesNuevos');
    id.appendChild(clon);
})