const numberBtns = document.querySelectorAll(".number");
const equationDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#result");

let currentNumber = 0;
let equation;

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", registerNumber);
});

function registerNumber(event) {
  currentNumber === 0
    ? (currentNumber = Number(event.target.textContent))
    : (currentNumber += event.target.textContent);
  updateDisplay(currentNumber);
}

function updateDisplay(value) {
  equationDisplay.textContent = value;
  resultDisplay.textContent = value;
}
