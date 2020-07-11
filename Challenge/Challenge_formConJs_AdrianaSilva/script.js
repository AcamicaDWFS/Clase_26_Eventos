var input = document.getElementById("name");
var boton = document.getElementById("btnEnviar");

/*
boton.addEventListener("click", function(){
    console.log(input.value);
    alert("Hola ", valor);
});
*/


boton.addEventListener("click", saludar);

function saludar(){

    if(input.value == "") {
        input.style.backgroundColor = "red";
        alert("No has escrito tu nombre");
    }
    else {
        alert("Hola " + input.value);
    }
}