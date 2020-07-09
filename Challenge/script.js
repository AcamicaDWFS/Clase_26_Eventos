const show = () => {
    let info = document.getElementById("info");
    if(info.value) {
        alert("Hello " + info.value)
    } else {
        info.style.background = '#ff0000';
        alert("Error no se Introdujo información");
    }
}

const validate = (element) => {
    element.style.background = "#fff";
}
