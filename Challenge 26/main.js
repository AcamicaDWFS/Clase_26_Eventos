function hi(){
    let newName = document.getElementById("name");
    let name = newName.value;
    newName.addEventListener("keydown", function(){
        newName.style.backgroundColor = "white";
    })
    if(name === "" || name === null){
        alert("Ingrese un nombre por favor :)");
        newName.style.backgroundColor = "red";
    } else{
        alert("Hola :) " + name);
        
}
}
