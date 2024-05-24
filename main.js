const equationDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#result");

const numberBtns = document.querySelectorAll(".number");
const operationBtns = Array.from(
  document.querySelectorAll(".operation")
).filter((operation) => operation.id !== "equal");

const pointBtn = document.querySelector("#point");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");

const operationsFunctions = {
  add: () => Number(n1) + Number(n2),
  subtract: () => n1 - n2,
  multiply: () => n1 * n2,
  divide: () => n1 * n2,
};

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

equalBtn.addEventListener("click", doOperation);

clearBtn.addEventListener("click", reset);

function doOperation() {
  n2 = currentNumber;
  if (isFirstNumberNull() || isOperationNull() || isSecondNumberNull()) {
    return;
  }

  currentNumber = operationsFunctions[operation]();
  equation = currentNumber;
  updateDisplay();
}

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
  if (!isOperationNull() || isCurrentNumberNull()) {
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

function isSecondNumberNull() {
  return n2 === null;
}

function isCurrentNumberNull() {
  return currentNumber === null;
}

function isOperationNull() {
  return operation === null;
}

function updateDisplay() {
  equationDisplay.textContent = equation;
  resultDisplay.textContent = currentNumber;
}

function reset() {
  n1 = null;
  operation = null;
  currentNumber = null;
  equation = null;

  equationDisplay.textContent = 0;
  resultDisplay.textContent = 0;
}
