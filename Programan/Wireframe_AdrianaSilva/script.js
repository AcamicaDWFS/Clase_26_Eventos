let arregloImagenes = ['./img/rotar/perro1.jpg', './img/rotar/perro2.jpg', './img/rotar/perro3.jpg', './img/rotar/perro4.jpg'];
let titulo = document.getElementById("titulo");

function actualizarFront () {
    //definir variables para guardar elementos del menu
    let menu = document.getElementById("opcionesMenu");
    let opcion = document.createElement("li");
    let enlace = document.createElement("a");

    //manipular el codigo para insertar elementos
     
    enlace.innerHTML = "Opcion 5";
    enlace.setAttribute("href", "#");
    opcion.append(enlace);
    menu.append(opcion);

    //asignacion de clase con varias propiedades

    titulo.setAttribute("class", "titleStyle");

    //Invertir tarjetas
    let container = document.getElementById("contenedor");
    container.style.flexDirection = "row-reverse";

}

let contador = -1;
let imagen;

function cambiarImagenes(){
    if (contador < arregloImagenes.length) {
        contador+=1;
        imagen = document.getElementById("imagenCentral");
        imagen.setAttribute("src", arregloImagenes[contador]);

        if(contador == arregloImagenes.length-1){
            contador = -1;
            console.info(contador);
        }    
    }    
}

let logo = document.getElementById("huellita");
logo.addEventListener("mouseover", function(){ modificarLogo("grande") } );
logo.addEventListener("mouseout", function(){ modificarLogo("chico") } );

function modificarLogo(tipoMovimiento){
    if (tipoMovimiento == "grande"){
        logo.setAttribute("class", "agrandarLogo");
    }
    else{
        logo.setAttribute("class", "logo");
    }
}

titulo.addEventListener("click", modificarTexto);

function modificarTexto(){
    let nuevoTitulo = prompt("Ingrese un nuevo título: ") ;
    localStorage.titulo = titulo.innerHTML;
    titulo.innerHTML = nuevoTitulo;
}

actualizarFront();
setInterval( cambiarImagenes, 2000);


let btnMore = document.querySelector("button");
let contenedor = document.getElementById("contenedor");
let seccion1 = document.getElementById("seccion1");
let seccion2 = document.getElementById("seccion2");

btnMore.addEventListener("click", () => {
    let nuevaSeccion = seccion1.cloneNode(true);
    let nuevaSeccion2 = seccion2.cloneNode(true);
    
    contenedor.insertBefore(nuevaSeccion, seccion2);
    contenedor.insertBefore(nuevaSeccion2, nuevaSeccion);
});
