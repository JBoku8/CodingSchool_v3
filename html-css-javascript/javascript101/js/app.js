const currentThemeElement = document.getElementById("currentTheme");
const themePlaygroundElement = document.getElementById("themePlayground");

currentThemeElement.onchange = function (event) {
  themePlaygroundElement.style.backgroundColor = event.target.value;
};

const divElement = document.getElementById("divElement");
const sectionElement = document.getElementById("sectionId");
const pElement = document.getElementById("pId");
const spanElement = document.getElementById("spanId");

divElement.onclick = () => {
  myFunc("divElement clicked");
};

sectionElement.onclick = () => {
  myFunc("sectionElement clicked");
};

pElement.onclick = (event) => {
  event.stopPropagation();
  myFunc("pElement clicked");
};

const listener2 = (event) => {
  event.stopPropagation();
  myFunc("spanElement clicked 2");
  spanElement.removeEventListener("click", listener2);
};

const listener1 = (event) => {
  event.stopPropagation();
  myFunc("spanElement clicked 1");
  spanElement.removeEventListener("click", listener1);
};

spanElement.addEventListener("click", listener1);
spanElement.addEventListener("click", listener2);

const myFunc = (text) => console.log(text);

myFunc("my func body");

// function myFunc(text) {
//   console.log(text);
// }
const numbersDiv = document.querySelector(".numbers");
const numbersArray = Array.from(numbersDiv.children);

let counter = 0;
const timerId = setInterval(() => {
  if (counter > 10) {
    clearInterval(timerId);
  }
  numbersArray.forEach((element) => {
    element.style.backgroundColor = rgb();
  });
  counter++;
}, 1500);

numbersDiv.addEventListener("click", (event) => {
  event.target.style.backgroundColor = rgb();
});

function rgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b})`;
}

/**
 * div - onclick
 * section - onclick
 * p -> p onclick
 * span -> listener1, listener2
 *
 */
