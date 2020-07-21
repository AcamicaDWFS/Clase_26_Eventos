let inputText=document.getElementById("name")
inputText.addEventListener("keydown", function(){inputText.style.background="white"});
//inputText.addEventListener("keydown", console.log("Estoy tecleando"))


function checkName(){
    let element = document.getElementById("name")
	let name = element.value
	//console.log("hola "+name+"...")

	if(name===""){
		alert("Input vacío")
		element.style.background="red"
		
	}else{
		alert("hola "+name)
	}
}