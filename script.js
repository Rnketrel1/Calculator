//get buttons
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

//global variables
let displayValue;

//gets user input and displays it while keeping it stored in a variable
function displayText(value) {
  display.innerText += value;
  displayValue = display.innerText;
}

//times 100 ( add 00 )
function times100() {
  let newValue = display.innerText * 100;
  display.innerText = newValue;
}
//sends the user innput to the correct function (i know theres a better way to do this but idk how)
buttonOne.onclick = function () {
  displayText(1);
};
buttonTwo.onclick = function () {
  displayText(2);
};
buttonThree.onclick = function () {
  displayText(3);
};
buttonFour.onclick = function () {
  displayText(4);
};
buttonFive.onclick = function () {
  displayText(5);
};
buttonSix.onclick = function () {
  displayText(6);
};
buttonSeven.onclick = function () {
  displayText(7);
};
buttonEight.onclick = function () {
  displayText(8);
};
buttonNine.onclick = function () {
  displayText(9);
};
buttonZero.onclick = function () {
  displayText(0);
};

//special inputs
decimal.onclick = function () {
  displayText(".");
};
divide.onclick = function () {
  displayText("/");
};
times.onclick = function () {
  displayText("*");
};
minus.onclick = function () {
  displayText("-");
};
plus.onclick = function () {
  displayText("+");
};
clear.onclick = function () {
  displayValue = "";
  display.innerText = "";
};
plus00.onclick = function () {
  times100();
};
calculate.onclick = function () {
  calculateFunction();
};
remainder.onclick = function () {
  displayText("%");
};

//the calculator
function calculateFunction() {
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("/") ||
    displayValue.includes("*")
  ) {
    const result = new Function("return " + displayValue)();
    display.innerText = result;
  } else {
    display.innerText = "ERROR";
    displayValue = "";
  }
}
