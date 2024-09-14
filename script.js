let userInputOne = null;
let userOperator = null;
let userInputTwo = null;
let displayValue = "";

const clear = document.getElementById("clear");
const plus00 = document.getElementById("plus100");
const remainder = document.getElementById("remainder");
const divide = document.getElementById("divide");
const buttonOne = document.getElementById("numberone");
const buttonTwo = document.getElementById("numbertwo");
const buttonThree = document.getElementById("numberthree");
const times = document.getElementById("times");
const buttonFour = document.getElementById("numberfour");
const buttonFive = document.getElementById("numberfive");
const buttonSix = document.getElementById("numbersix");
const minus = document.getElementById("minus");
const buttonSeven = document.getElementById("numberseven");
const buttonEight = document.getElementById("numbereight");
const buttonNine = document.getElementById("numbernine");
const plus = document.getElementById("plus");
const buttonZero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const calculate = document.getElementById("calculate");
const display = document.getElementById("displayvalue");

function updateDisplay() {
  display.innerText = displayValue;
}

function handleNumberClick(number) {
  displayValue += number;
  updateDisplay();
}

buttonOne.addEventListener("click", () => handleNumberClick("1"));
buttonTwo.addEventListener("click", () => handleNumberClick("2"));
buttonThree.addEventListener("click", () => handleNumberClick("3"));
buttonFour.addEventListener("click", () => handleNumberClick("4"));
buttonFive.addEventListener("click", () => handleNumberClick("5"));
buttonSix.addEventListener("click", () => handleNumberClick("6"));
buttonSeven.addEventListener("click", () => handleNumberClick("7"));
buttonEight.addEventListener("click", () => handleNumberClick("8"));
buttonNine.addEventListener("click", () => handleNumberClick("9"));
buttonZero.addEventListener("click", () => handleNumberClick("0"));

decimal.addEventListener("click", () => {
  if (!displayValue.includes(".")) {
    handleNumberClick(".");
  }
});

function setOperator(op) {
  if (displayValue === "") return;
  userInputOne = parseFloat(displayValue);
  userOperator = op;
  displayValue = "";
  updateDisplay();
}

plus.addEventListener("click", () => setOperator("+"));
minus.addEventListener("click", () => setOperator("-"));
times.addEventListener("click", () => setOperator("*"));
divide.addEventListener("click", () => setOperator("/"));
remainder.addEventListener("click", () => setOperator("%"));

calculate.addEventListener("click", function () {
  if (userInputOne === null || displayValue === "" || userOperator === null)
    return;

  userInputTwo = parseFloat(displayValue);
  let result;

  switch (userOperator) {
    case "+":
      result = userInputOne + userInputTwo;
      break;
    case "-":
      result = userInputOne - userInputTwo;
      break;
    case "*":
      result = userInputOne * userInputTwo;
      break;
    case "/":
      result = userInputTwo !== 0 ? userInputOne / userInputTwo : "Error";
      break;
    case "%":
      result = userInputOne % userInputTwo;
      break;
    default:
      result = "Error";
  }

  displayValue = result.toString();
  updateDisplay();
  userInputOne = null;
  userOperator = null;
  userInputTwo = null;
});

clear.addEventListener("click", function () {
  displayValue = "";
  userInputOne = null;
  userOperator = null;
  userInputTwo = null;
  updateDisplay();
});

plus00.addEventListener("click", function () {
  displayValue += "00";
  updateDisplay();
});
