let input = document.getElementById('todo');
let boton = document.getElementById('addTodo');
let lista = document.getElementById('todoList');

function crearLi(){
    const nuevoLi = document.createElement('li');
    const textInput = input.value;

    nuevoLi.innerText = textInput;

    lista.append(nuevoLi);
}

//Listener
boton.addEventListener('click',crearLi);

input.addEventListener('keydown',(event) => {
    if (event.which === 13 || event.key === 'Enter' ){
        crearLi();
    }

});
