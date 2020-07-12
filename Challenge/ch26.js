let inputN = document.getElementById("inputName");
let btn = document.getElementById("btn");

//Function arrow
btn.addEventListener("click", () => {
    
    if (inputN.value == undefined || inputN.value == "") {
        alert("El input está vacío. Escribe tu nombre por favor.");
        inputN.style.backgroundColor = "red";
    } else {
        alert("Hola " + inputN.value);
        inputN.value = "";
    }
});

//Función para el color de la caja
inputN.addEventListener("keydown", () => {
    
    inputN.style.background = "white";

})

//EventListener con function
/* btn.addEventListener("click", function() {
    let inputN = document.getElementById("inputName");
    alert("Hola " + inputN.value);
    inputN.value = "";
}); */


