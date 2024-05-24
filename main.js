const equationDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#result");

const numberBtns = document.querySelectorAll(".number");
const operationBtns = Array.from(
  document.querySelectorAll(".operation")
).filter((operation) => operation.id !== "equal");
const pointBtn = document.querySelector("#point");

let currentNumber = 0;
let n1;
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
  currentNumber === 0
    ? (currentNumber = Number(event.target.textContent))
    : (currentNumber += event.target.textContent);
  equation = currentNumber;
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
}

function registerPoint() {
  if (currentNumber.toString().includes(".")) {
    return;
  }
  currentNumber += pointBtn.textContent;
  updateDisplay();
}

function updateDisplay() {
  equationDisplay.textContent = equation;
  resultDisplay.textContent = currentNumber;
}
