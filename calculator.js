const addition = document.querySelector(".add");
const subtraction = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");
const equalsTo = document.querySelector(".equals");
const clearScreen = document.querySelector(".clear");
const displayScreen = document.querySelector(".displayScreen")

one.addEventListener("click", () => {
  displayScreen.value += one.textContent;
});
two.addEventListener("click", () => {
  displayScreen.value += two.textContent;
});
three.addEventListener("click", () => {
  displayScreen.value += three.textContent;
});

four.addEventListener("click", () => {
  displayScreen.value += four.textContent;
});
five.addEventListener("click", () => {
  displayScreen.value += five.textContent;
});
six.addEventListener("click", () => {
  displayScreen.value += six.textContent;
});
seven.addEventListener("click", () => {
  displayScreen.value += seven.textContent;
});
eight.addEventListener("click", () => {
  displayScreen.value += eight.textContent;
});
nine.addEventListener("click", () => {
  displayScreen.value += nine.textContent;
});
zero.addEventListener("click", () => {
  displayScreen.value += zero.textContent;
});
decimal.addEventListener("click", () => {
  displayScreen.value += decimal.textContent;
});
addition.addEventListener("click", () => {
  displayScreen.value += addition.textContent;
});
subtraction.addEventListener("click", () => {
  displayScreen.value += subtraction.textContent;
});
multiply.addEventListener("click", () => {
  displayScreen.value += multiply.textContent;
});
divide.addEventListener("click", () => {
  displayScreen.value += divide.textContent;
});
clearScreen.addEventListener("click", () => {
  displayScreen.value = "";
});

equalsTo.addEventListener("click", ()=>{
  let result = eval(displayScreen.value);
  displayScreen.value = result;
})