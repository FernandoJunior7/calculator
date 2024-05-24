const equationDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#result");

const numberBtns = document.querySelectorAll(".number");
const operationBtns = Array.from(
  document.querySelectorAll(".operation")
).filter((operation) => operation.id !== "equal");
const pointBtn = document.querySelector("#point");

let currentNumber = null;
let n1 = null;
let equation = null;
let operation = null;

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", registerNumber);
});

operationBtns.forEach((operationBtn) => {
  operationBtn.addEventListener("click", registerOperation);
});

pointBtn.addEventListener("click", registerPoint);

function registerNumber(event) {
  isCurrentNumberNull()
    ? (currentNumber = Number(event.target.textContent))
    : (currentNumber += event.target.textContent);

  isFirstNumberNull()
    ? (equation = currentNumber)
    : (equation += event.target.textContent);

  updateDisplay();
}

function registerOperation(event) {
  if (operation !== null || isCurrentNumberNull()) {
    return;
  }
  n1 = currentNumber;
  operation = event.target.id;
  equation += ` ${event.target.textContent} `;
  updateDisplay();
  currentNumber = null;
}

function registerPoint() {
  if (currentNumber.toString().includes(".")) {
    return;
  }
  currentNumber += pointBtn.textContent;
  equation += pointBtn.textContent;
  updateDisplay();
}

function isFirstNumberNull() {
  return n1 === null;
}

function isCurrentNumberNull() {
  return currentNumber === null;
}

function updateDisplay() {
  equationDisplay.textContent = equation;
  resultDisplay.textContent = currentNumber;
}
