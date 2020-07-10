
//inputText.addEventListener("keydown",changeColor());

function changeColor(){
    let nombre= document.getElementById("nombre");
    nombre.style.background="white";
  
}

function validarNombre(){
    let nombre= document.getElementById("nombre");
    let userName = nombre.value;
    console.log(userName)

 if (userName===""){
     alert("Por favor ingresa un Nombre");
     nombre.style.background="red"

 }else{
     alert("hola"+" "+ userName)
 }



}
