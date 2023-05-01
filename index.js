function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1+num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    if(num2==0)
    return undefined;
    else
    return num1/num2;
}

let firstNumber = null;
let secondNumber = null;
let operator = null;

function appendToDisplay(digit) {
  const display = document.getElementById('display');
  if (display.value === '0') {
    display.value = digit;
  } else {
    display.value += digit;
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '0';
  firstNumber = null;
  secondNumber = null;
  operator = null;
}

function operatorClicked(op) {
  const display = document.getElementById('display');
  if (firstNumber === null) {
    firstNumber = parseFloat(display.value);
    operator = op;
    display.value = '0';
  } else if (secondNumber === null) {
    secondNumber = parseFloat(display.value);
    const result = operate(firstNumber, secondNumber, operator);
    display.value = result.toString();
    firstNumber = result;
    operator = op;
    secondNumber = null;
  } else {
    operator = op;
  }
}

function calculate() {
  const display = document.getElementById('display');
  if (firstNumber !== null && secondNumber === null && operator !== null) {
    secondNumber = parseFloat(display.value);
    const result = operate(firstNumber, secondNumber, operator);
    display.value = result.toString();
    firstNumber = result;
    operator = null;
    secondNumber = null;
  }
}

function operate(num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

