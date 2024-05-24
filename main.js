const numberBtns = document.querySelectorAll(".number");
const equationDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#result");

const pointBtn = document.querySelector("#point");

let currentNumber = 0;
let equation;

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", registerNumber);
});

pointBtn.addEventListener("click", registerPoint);

function registerNumber(event) {
  currentNumber === 0
    ? (currentNumber = Number(event.target.textContent))
    : (currentNumber += event.target.textContent);
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
  equationDisplay.textContent = currentNumber;
  resultDisplay.textContent = currentNumber;
}
