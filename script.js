let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").innerHTML = currentNumber;
}

function selectOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearResult() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").innerHTML = "0";
}

function calculate() {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero!");
        return;
      }
      result = num1 / num2;
      break;
  }

  currentNumber = result.toString();
  document.getElementById("result").innerHTML = currentNumber;
}
