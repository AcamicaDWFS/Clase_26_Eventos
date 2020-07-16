// --- Agrega un nuevo item al menú de navegación desde JavaScript. ---
const menuList = document.querySelector("nav ul");
const newItem = document.createElement("li");

newItem.innerText = "Item 5";
menuList.append(newItem);

// --- Agrega una negrita a una sola palabra dentro de tu párrafo. ---
const p = document.querySelector("p");
let text = p.innerText.split(" ");

const pos = Math.floor(Math.random() * text.length);
text[pos] = `<b>${text[pos]}</b>`;
text = text.join(" ");

p.innerHTML = text;

// --- Luego de 10 segundos cambia la imágen. ---
const img = document.querySelector(".article img");

const imgOne =
  "https://naturecamp.net/wp-content/gallery/home-page-slides/indexslide12.JPG";

const imgTwo = "https://designm.ag/images/arch/nature/54084_1994.jpg";

setInterval(() => {
  img.src === imgOne ? (img.src = imgTwo) : (img.src = imgOne);
}, 10000);

// --- Invierte el orden de las dos tarjetas. ---
const cards = document.querySelectorAll(".img-container div");

//prettier-ignore
[cards[0].innerHTML, cards[1].innerHTML] = [cards[1].innerHTML, cards[0].innerHTML];

// --- Resalta el logo. ---
const logo = document.querySelector("#logo");

logo.addEventListener("mouseover", () => {
  logo.classList.add("logo-border");
});

logo.addEventListener("mouseout", () => {
  logo.classList.remove("logo-border");
});

// --- Reemplazar el título. ---
const title = document.querySelector("h1");

title.addEventListener("click", () => {
  const newTitle = prompt("Ingresa un nuevo título:");
  localStorage.setItem("title", newTitle);

  title.innerText = newTitle;
});

title.innerText = !localStorage.getItem("title")
  ? "Heading"
  : localStorage.getItem("title");

// --- Duplica la fila de 2 imágenes y 2 nombres con click en "Ver más". ---
function createCard(imgSrc, title) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const imgTitle = document.createElement("h2");

  img.src = imgSrc;
  img.setAttribute("alt", "Image");
  imgTitle.innerText = title;

  card.append(img, imgTitle);

  return card;
}

const imgButton = document.querySelector("button");
const cardContainer = document.querySelector(".img-container");
let buttonPressed = false;

imgButton.addEventListener("click", () => {
  if (!buttonPressed) {
    cardContainer.append(
      createCard(
        "https://d3hne3c382ip58.cloudfront.net/resized/400x400/mountains-tours-in-argentina-400X400_.JPG",
        "Argentina"
      ),

      createCard(
        "https://d3hne3c382ip58.cloudfront.net/resized/400x400/mountains-tours-in-austria-400X400_.JPG",
        "Austria"
      )
    );

    buttonPressed = true;
  }
});
