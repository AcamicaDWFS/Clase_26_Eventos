const textInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = textInput.value;
  alert(`¡Hola, ${name}!`);
});
