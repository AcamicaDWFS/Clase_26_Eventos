function agregar_item() {
    let menu = document.getElementById("menu_1");
    let new_item = document.createElement("li");
    new_item.innerHTML ="ITEM 5";
    menu.appendChild(new_item);
}

let negrita = document.getElementById("title_heading");
function style_negrita() {
    negrita.style.fontWeight = "strong";
    negrita.style.color = "orange";
}

function mover_tarjetas() {
    let contenedor_imagenes = document.getElementById("contenedor_imagenes");
    contenedor_imagenes.style.flexDirection = "row-reverse"
}


function cambiar_imagen() {
    let cachorro = document.getElementById("cachorro");
    let perro_adulto = document.getElementById("perro_adulto");
}


let cachorro = document.getElementById("cachorro");
let perrito = "perrito.jpg";
let perrito1 = "perrito1.jpg";
let perrito2 = "perrito2.jpg";
let imagenes = new Array(perrito, perrito1, perrito2);
let i = 0;


function Index(){
    if (i < imagenes.length) {
        cachorro.src = imagenes[i];
        i++;
    } else {
        i=0;
    }
}


let logo = document.getElementById("logo");

logo.addEventListener("mouseenter", function() {resalta_logo()});
logo.addEventListener("mouseout", function() {normalizar_logo()});

function resalta_logo() {
    logo.style.borderColor = "orange";
    logo.style.borderWidth = "thick";
}
function normalizar_logo() {
    logo.style.borderColor = "black";
    logo.style.borderWidth = "thin";
}

negrita.addEventListener("click", function(){promptTitulo()});
function promptTitulo(){
    let nuevoTitulo = prompt('Escoge un nuevo titulo');
    //localStorage.setItem(nuevoTitulo);
    negrita.innerHTML = nuevoTitulo;
    
}

function clone_node() {
    let contenedores = document.getElementById("contenedores_imagenes_texto");
    let clone = contenedores.cloneNode(true);
    let boton = document.getElementById("boton");
    let contenedorPadre = document.getElementById("contenedor_padre");
    contenedorPadre.insertBefore(clone , boton);
}
