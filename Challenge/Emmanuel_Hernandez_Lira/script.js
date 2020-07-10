const textInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = textInput.value;

  if (!name) {
    textInput.style.backgroundColor = "red";
    alert("El input está vacío.");
  } else {
    alert(`¡Hola, ${name}!`);
  }
});

textInput.addEventListener("keypress", () => {
  if (textInput.style.backgroundColor === "red") {
    textInput.style.backgroundColor = "white";
  }
});
