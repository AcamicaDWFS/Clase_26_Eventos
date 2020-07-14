function uniCharCode(event) {
    var char = event.which || event.keyCode;
    document.getElementById("demo").innerHTML = "El código de caracter Unicode (Unicode CHARACTER code) es: " + char;
}

function uniKeyCode(event) {
    var key = event.keyCode;
    document.getElementById("demo2").innerHTML = "El código de llave Unicode (Unicode KEY code) es: " + key;
}