const equationDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#result");

const numberBtns = document.querySelectorAll(".number");
const operationBtns = Array.from(
  document.querySelectorAll(".operation")
).filter((operation) => operation.id !== "equal");
const pointBtn = document.querySelector("#point");

let currentNumber = 0;
let n1 = 0;
let equation = 0;
let operation = null;

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", registerNumber);
});

operationBtns.forEach((operationBtn) => {
  operationBtn.addEventListener("click", registerOperation);
});

pointBtn.addEventListener("click", registerPoint);

function registerNumber(event) {
  isCurrentNumberValid()
    ? (currentNumber = Number(event.target.textContent))
    : (currentNumber += event.target.textContent);

  isFirstNumberValid()
    ? (equation = currentNumber)
    : (equation += event.target.textContent);
  updateDisplay();
}

function registerOperation(event) {
  if (operation !== null || currentNumber === 0) {
    return;
  }
  n1 = currentNumber;
  operation = event.target.id;
  equation += ` ${event.target.textContent} `;
  updateDisplay();
  currentNumber = 0;
}

function registerPoint() {
  if (currentNumber.toString().includes(".")) {
    return;
  }
  currentNumber += pointBtn.textContent;
  equation += pointBtn.textContent;
  updateDisplay();
}

function isFirstNumberValid() {
  return n1 === 0;
}

function isCurrentNumberValid() {
  return currentNumber === 0;
}

function updateDisplay() {
  equationDisplay.textContent = equation;
  resultDisplay.textContent = currentNumber;
}
