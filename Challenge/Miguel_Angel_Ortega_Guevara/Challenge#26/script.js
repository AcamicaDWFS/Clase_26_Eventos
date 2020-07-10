let inputText = document.getElementById("name");
function viewName() {
let name = inputText.value;
    // let name = document.getElementById("name").value;
    if (name.length == 0){
      inputText.style.backgroundColor = "red";
      alert("Ingresa un nombre");
    }
    else{
      inputText.style.backgroundColor = "white";
      alert("Hola " + name);
    }
}