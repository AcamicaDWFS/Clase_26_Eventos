let boxContent = document.getElementById('textBox');
let btnEnviar= document.getElementById('btn-name');
btnEnviar.addEventListener('click',()=>{
    boxContent.value==="" ? (boxContent.style.backgroundColor='red',alert('Input vacio'))
         : alert('Hola '+boxContent.value);
})
boxContent.addEventListener('keydown',()=>{
    boxContent.value==="" ? boxContent.style.backgroundColor='white' : false;
})