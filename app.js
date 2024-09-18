// function calculate() {
//   try {
//     const result = eval(currDisplay);
//     currDisplay = result.toString();
//   } catch (e) {
//     currDisplay = "Error";
//   }
//   updateDisplay();
// }

let currDisplay = "";

function updateDisplay() {
  const display = document.querySelector("#display");
  display.value = currDisplay;
}

function appendToDisplay(value) {
  currDisplay += value;
  updateDisplay();
}

function clearDisplay() {
  currDisplay = "";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currDisplay);
    currDisplay = result.toString();
  } catch (e) {
    currDisplay = "error";
  }
  updateDisplay();
}
