// Покрска всех карточек
const productCards = document.querySelectorAll(".card-container");
const changeColorButton = document.querySelector("#change-color-all-card");
const greenColorHash = "#00FF00"
const blueColorHash = "#0000FF"
changeColorButton.addEventListener("click", () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash);
})

// Покраска первой карточки
const firstProductCard = document.querySelector(".card-container");
const changeColorFirstButton = document.querySelector("#сhange-color-first-card");

changeColorFirstButton.addEventListener("click", () => {
 firstProductCard.style.backgroundColor = blueColorHash
})

//Открыть google
const oppenGoogleButton = document.querySelector("#oppen-google");
oppenGoogleButton.addEventListener("click", openGoogle)


function openGoogle() {
  const answer = confirm("Вы хотите открыть google?");
  if (answer === true) {
    window.open("https://www.google.com");
  } else {
    return;
  }
}

//Вывод консоль лог
const outputConsoleButton = document.querySelector("#output-console-log")
outputConsoleButton.addEventListener("click", () => outputConsoleLog("ДЗ №4"))

function outputConsoleLog(message) {
  alert(message)
  console.log(message);
}
//Вывод в консоль лог при наведении курсором
const outputConsolelogHeadline = document.querySelector(".headline");
 outputConsolelogHeadline.addEventListener("mouseover", function () {
  console.log(outputConsolelogHeadline.textContent);
 })

//
const colorButton = document.getElementById("color-button");
 colorButton.addEventListener("click", function() {
 colorButton.classList.toggle("bg-yellow")
 colorButton.classList.toggle("bg-blue")
})