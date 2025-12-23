//Создать функцию c городом и температурой
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeather("Тюмень", 30);

// Создать функцию для проверки скорости света
const speedOfLight = 299792458; 
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
    }
  } 
checkSpeed(300000000); 
// Функция с покупкой товара
const product = "Сумка";
const price = 3000;
function buyBag(budget) {
  if (budget > price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
  }
}
buyBag(2500);

//Создать 1 функцию и именовать её по своему усмотрению
const logSum = (a, b) => {
  console.log(a + b);
}
logSum(5, 10);

//Переменные по моему усмотрению
const firstName = "Алина";
let age = 25;
const city = "Тюмень";