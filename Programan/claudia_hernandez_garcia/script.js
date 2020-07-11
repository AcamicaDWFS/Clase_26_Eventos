// Add Item
let links = document.getElementById("links");
const li = document.createElement("li");
const a = document.createElement("a");
a.textContent = "New Item";
links.appendChild(li).appendChild(a);

// Add bold text
const txt = document.getElementById("headingTxt").textContent;
const txtArray = txt.split(" ");
const index = Math.round(txtArray.length / 2);
txtArray[index] = `<strong>${txtArray[index]}</strong>`;
document.getElementById("headingTxt").innerHTML = txtArray.join(" ");

// Change img and the order of imgConteiner div
onload = function () {
  setInterval(() => {
    const imgs = [
      "assets/img/image1.jpg",
      "assets/img/image2.jpg",
      "assets/img/image3.jpg",
    ];
    indexImg = randomFun(imgs, indexImg);
    document.getElementById("img1").src = imgs[indexImg];

    const direction = ["row-reverse", "row"];
    indexDir = randomFun(direction, indexDir);
    imgContainer.style.flexDirection =
      direction[indexDir];
  }, 5000);
};
let indexImg = 0;
let indexDir = 0;
const imgContainer = document.getElementById("imgConteiner");

const randomFun = (array, index) => {
  const num = Math.floor(Math.random() * array.length);
  return index === num ? randomFun(array, index) : num;
};

// highlight logo
const logo = document.getElementById("logo");
logo.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.border = "solid 1px black";
  },
  false
);

logo.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.removeProperty("border");
  },
  false
);

// change title
const onClick = () => {
    let newTitle;
    do {
        newTitle = prompt('Ingresa un nuevo titulo');
        if(newTitle) {
            localStorage.setItem('title', newTitle);
            titleOnLS();
        }
    } while(newTitle === '');
}

const titleOnLS = () => {
    const onLocalS = localStorage.getItem('title');
    
    if(onLocalS) {
        title.textContent = onLocalS;
    }    
}

const title = document.getElementById('title');
title.style.cursor = 'pointer';
title.addEventListener('click', onClick);
titleOnLS();

// duplicate images
const clickMore = () => {
    const section2 = document.getElementById('section2');    
    var newDiv = imgContainer.cloneNode(true);
    newDiv.id = `imgConteiner${section2.children.length + 1}`;
    section2.appendChild(newDiv);
}

const btnMore = document.getElementById('btnMore');
btnMore.addEventListener('click', clickMore);

