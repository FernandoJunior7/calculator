const numberBtns = document.querySelectorAll(".number");
const equationDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#result");

let currentNumber;
let equation;

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", registerNumber);
});

function registerNumber(event) {
  currentNumber = event.target.textContent;
  updateDisplay(currentNumber);
}

function updateDisplay(value) {
  equationDisplay.textContent = value;
  resultDisplay.textContent = value;
}
